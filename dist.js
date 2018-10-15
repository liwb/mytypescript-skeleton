const util = require('util');
const shelljs = require('shelljs');
const package = require('./package.json');

shelljs.cp('package.json', './dist');
shelljs.cp('README.md', './dist');
shelljs.cp('LICENSE', './dist');

shelljs.cd('dist');
shelljs.exec(util.format('tar -czvf ../%s.tar.gz .', package.name));
