const http = require("http");
const fs = require("fs");

const port = 8888

http.createServer("/", (req, res) => {
	fs.readFile("../../liambloom.github.io/MagicEight.html", (err, data) => {
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