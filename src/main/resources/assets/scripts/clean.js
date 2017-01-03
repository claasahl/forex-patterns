var pkg = require('package')(module);
var util = require('utilities');

var baseDir = pkg.config.baseDir.public;
util.file.rmRf(baseDir);
