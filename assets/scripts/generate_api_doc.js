var raml2html = require('raml2html');
var writeFile = require('write');
var configWithDefaultTemplates = raml2html.getDefaultConfig();
var src = process.argv[2];
var dst = process.argv[3];
var logError = function(error) {
	if (error)
		console.log(error);
};

// source can either be a filename, url, or parsed RAML object
raml2html.render(src, configWithDefaultTemplates).then(function(result) {
	writeFile(dst, result, logError);
}, logError);