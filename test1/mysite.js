const http = require("http");
const url = require("url");
const fs = require("fs");

const port = 7000

http.createServer("/", (req, res) => {
	fs.readFile("../../liambloom.github.io" + url.parse(req.url, true).pathname, (err, data) => {
		if (err) {
			res.writeHead(404, {"Content-Type": "text/html"});
			res.end(err.toString());
		}
		else {
			try {
				res.writeHead(200, {"Content-Type": "text/html"});
				res.write(data);
				res.end();
			}
			catch (error) {
				res.writeHead(500, {"Content-Type": "text/html"});
				res.end(error.toString());
			}
		}
	})
}).listen(port);

console.log(`Magic 8 Ball is running in port ${port}`)