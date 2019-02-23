//jshint esversion:6
const EventEmitter = require("events");

const url = "http://example.io/log";

class Logger extends EventEmitter {
	log(msg) {
		this.emit("logging");
		console.log(msg);
		this.emit("logged", {message: msg, url: url});
	}
}

module.exports = Logger;
//exports.emmiter = emmiter