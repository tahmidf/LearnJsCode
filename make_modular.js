var path = require('path');
var mymodule = require('./make_modular_mod.js');
var folder = process.argv[2];
var fileType = process.argv[3];

var callback = function (err, files){
	if (err) throw err;
	files.forEach(function(file){
		console.log(file);
	});
}

mymodule(folder, fileType, callback);