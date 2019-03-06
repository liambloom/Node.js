//jshint esversion:6
//This is random
const number = (min, max) => {
	if (typeof min === "number" || typeof max === "number") {
		if (min % 1 !== 0 || max % 1 !== 0) {
			throw "Decimals are not allowed";
		}
		else if (min >= max) {
			throw "max must be greater than min";
		}
		else if (max - min === 1) {
			return Math.round(Math.random() + min);
		}
		else {
			return Math.floor(Math.random() * (max - min) + min);
		}
	}
	else {
		throw "min and max values must be numbers";
	}
};

exports = {
	number
};