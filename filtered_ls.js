var fs = require('fs');
var path = require('path');
var folder = process.argv[2];

fs.readdir(folder, function(err, files){
	if (err) {
		console.log('error');
	}
	files.forEach(function(filename){
		if(path.extname(filename) === '.' + process.argv[3]){
			console.log(filename);
		}
	});
});