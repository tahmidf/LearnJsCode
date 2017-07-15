var fs = require('fs');
var path = require('path');


module.exports = function(folder, fileType, callback){ 
	fs.readdir(folder, function(err, files){
		if (err) {
			return callback(err);
		}
		else{
			files = files.filter(function(file){
				if(path.extname(file) === '.' + fileType){
					return true;
				}
			});
		return callback(null, files);
		}
	
	});
}