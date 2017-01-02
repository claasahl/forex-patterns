// loading modules
var raml2html = require('raml2html');
var writeFile = require('write');
var cmdArgs = require('command-line-args');

// preliminary function for logging errors 
var logError = function(error) {
	if (error)
		console.log(error);
};

// retrieving command line arguments
var optionDefinitions = [ {
	name : 'src',
	type : String
}, {
	name : 'dst',
	type : String
} ];
var options = cmdArgs(optionDefinitions);

// generate API documentation based on supplied RAML file
var configWithDefaultTemplates = raml2html.getDefaultConfig();
raml2html.render(options.src, configWithDefaultTemplates).then(function(result) {
	writeFile(options.dst, result, logError);
}, logError);