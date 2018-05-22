(function(window){
	'use strict';

	function InvalidArgumentNumber(message) {
		this.message = message;
	}

	InvalidArgumentNumber.prototype = new Error();
	InvalidArgumentNumber.prototype.name = 'InvalidArgumentNumber';

	function objectify(one, two, three) {
		if (arguments.length != 3) throw new InvalidArgumentNumber('This function needs 3 arguments, only ' + arguments.length + ' provided.');

		return {"one": one, "two": two, "three": three};
	}

	try {
		objectify('a');
	}
	catch (error) {
		console.log(error.name + ': ' + error.message);
	}
	

})(window);