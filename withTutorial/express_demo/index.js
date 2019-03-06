//jshint esversion:6
const express = require("express");
const Joi = require("joi");

const app = express();

app.use(express.json());

const courses = [
	{ id: 1, name: "course1" },
	{ id: 2, name: "course2" },
	{ id: 3, name: "course3" },
];

app.get("/", (req, res) => {
	res.send("Hello World!!!");
});

app.get("/api/courses", (req, res) => {
	res.send(courses);//This is an example
});

app.get("/api/courses/:id", (req, res) => {
	const course = courses.find(c => c.id === parseInt(req.params.id));
	if (!course) return res.status(404).send("The course with the given ID was not found");
	res.status(200).send(course);
});

app.post("/api/courses", (req, res) => {
	const { error } = validate(req.body);//This name is object destructoring, you name the property you want in curly braces
	if (error) return res.status(400).send(error.details[0].message);
	/*else if (req.body.name.length < 3) {
		res.status(400).send("Name must be at least 3 characters");
	urn;
	}*/

	const course = {
		id: courses.length + 1,//in database id would be assigned by that
		name: req.body.name
	};
	courses.push(course);
	res.status(201).send(course);
});

app.put("/api/courses/:id", (req, res) => {
	const course = courses.find(c => c.id === parseInt(req.params.id));
	if (!course) return res.status(404).send(`The course with the given ID was not found\b
	You gave course ID: ${req.params.id}\b
	The existing courses are: ${courses}`);

	const { error } = validate(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	course.name = req.body.name;
	res.status(200).send(course);
});

app.delete("/api/courses/:id", (req, res) => {
	const course = courses.find(c => c.id === parseInt(req.params.id));
	if (!course) res.status(404).send(`The course with the given ID was not found\b
	You gave course ID: ${req.params.id}\b
	The existing courses are: ${courses}`);

	const index = courses.indexOf(course);
	courses.splice(index, 1);

	res.status(200).send(course);
});

var validate = course => {
	const schema = {//schema is rules that imputs must follow
		name: Joi.string().min(3).required()
	};
	return result = Joi.validate(course, schema);
};

const port = process.env.PORT || 3000;//This sets port to a port asigned by the server, or, if one is not assigned, like when I'm running it on localhost, it sets it to 3000
console.log(process.env.PORT); //Make this a separate environment from my site and set it up properly for node.js

app.listen(port, () => {console.log(`index.js running on port ${port}`);});