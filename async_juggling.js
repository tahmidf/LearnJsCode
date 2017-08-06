var http = require('http');
bl = require('bl');

var queue = [];
var count = 0;
http.get(process.argv[2], f(0));
http.get(process.argv[3], f(1));
http.get(process.argv[4], f(2));
function f (i){
	return function callback(response) {
		response.pipe(bl(function(err, data){
			queue[i] = data.toString();
			count++;
			if (count == 3){
				queue.forEach(function(pos){
					console.log(pos);
				});
			}
		}));
	}
}

