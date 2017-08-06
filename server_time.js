var net = require('net');
var port = Number(process.argv[2]);

var server = net.createServer(function(socket){
	var date = new Date();
	var day = date.getDate();
	var month = date.getMonth()+1;
	var year = date.getFullYear();
	var min = date.getMinutes();
	var hour = date.getHours();
	
	var getStringDate = mask(year, 4) + '-' + mask(month, 2) + '-' + mask(day, 2) + ' ' + mask(hour, 2) + ':' + mask(min, 2) + '\n';

	socket.write(getStringDate);
	socket.end();

});

server.listen(port);

function mask(number, zero){
	var zeroes = '0000000';
	return (zeroes + number.toString()).slice(-zero);
}