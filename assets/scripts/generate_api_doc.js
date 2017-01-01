const
raml2html = require('raml2html');
const
writeFile = require('write');
const
configWithDefaultTemplates = raml2html.getDefaultConfig();
const
src = process.argv[2];
const
dst = process.argv[3];
const
logError = function(error) {
	if (error)
		console.log(err);
};

// source can either be a filename, url, or parsed RAML object
raml2html.render(src, configWithDefaultTemplates).then(function(result) {
	writeFile(dst, result, logError);
}, logError);