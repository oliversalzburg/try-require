module.exports = tryRequire;

function tryRequire(moduleReference) {
	var module = null;
	try {
		module = require(moduleReference);

	} catch(error) {
		this.lastError = error;
	}

	return module;
}
