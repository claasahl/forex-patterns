var pkg = require('package')(module);
var util = require('utilities');

var src = 'node_modules/bootstrap/dist';
var dst = pkg.config.baseDir.public;
util.file.cpR(src, dst);
