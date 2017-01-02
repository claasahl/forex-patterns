// loading modules
var raml2html = require('raml2html');
var cmdArgs = require('command-line-args');

// retrieving command line arguments
var optionDefinitions = [ {
	name : 'src',
	type : String,
	defaultOption : true
} ];
var options = cmdArgs(optionDefinitions);

// generate API documentation based on supplied RAML file
var configWithDefaultTemplates = raml2html.getDefaultConfig();
raml2html.render(options.src, configWithDefaultTemplates).then(
		function(result) {
			console.log(result);
		}, function(error) {
			if (error)
				console.error(error);
			process.exitCode = -1;
		});