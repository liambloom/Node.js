//jshint esversion:6
const express = require("express");
const app = express();

//const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!!!");
});

app.get("/api/courses", (req, res) => {
    res.send([1, 2, 3]);//This is an example
});

const port = process.env.PORT || 3000;//This sets port to a port asigned by the server, or, if one is not assigned, like when I'm running it on localhost, it sets it to 3000
console.log(process.env);

app.listen(port, () => {console.log(`index.js running on port ${port}`);});