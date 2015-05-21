module.exports = tryRequire;

function tryRequire( moduleReference ) {
	var requiredModule = null;
	try {
		requiredModule = require( moduleReference );

	} catch( error ) {
		module.exports.lastError = error;
	}

	return requiredModule;
}
