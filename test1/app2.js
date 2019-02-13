//const express = require('express');
const http = require("http");
const url = require("url");
const fs = require("fs");
const myTestModule = require('./app3.js');
//const app = express();
const port = 3000;

/*app.get*/http.createServer('/', (req, res) => {/*res.send*/
	//res.writeHead(200, {'Content-Type': 'text/html'});
	//const q = url.parse(req.url, true).href
	fs.readFile("." + url.parse(req.url, true).pathname, (err, data) => {
		if (err) {
			//fs.readFile(".404test.html", (err, data => {
				res.writeHead(404, {"Content-Type": "text/html"});
				res.write(`Error: 404`);
				res.end()
			//}))
		}
		else {
			res.writeHead(200, {"Content-Type": "text/html"});
			res.write(data);
			res.end();
		}
	}); 
	/*res.write(/*`
<!DOCTYPE html>
<html>
<body>
`<p id="testp">Thank you for visiting ${url.parse(req.url, true).query.msg}<br>
It is ${myTestModule.myDateTime()}</p>
<input type="button" value = "Reload" onclick="document.getElementById('testp').innerHTML = '${myTestModule.myDateTime().toString()}'">
`/*</body>
</html>
	`)

	res.end();*/
}).listen(port);

//app.listen(port, () => console.log(`Example app listening on port ${port}!`));
//http.listen(port, () => console.log(`app2.js running on port ${port}`));
console.log(`app2.js running on port ${port}`)