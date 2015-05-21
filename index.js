module.exports = attemptRequire;

function attemptRequire( moduleReference ) {
	var requiredModule = null;
	try {
		requiredModule = require( moduleReference );

	} catch( error ) {
		module.exports.lastError = error;
	}

	return requiredModule;
}
