var http = require('http');
var fs = require('fs');

//Part 1a
//////////////////////////////////////////////////////////////////
function FundStarter(res, req)
{
	var content = fs.readFileSync('index.html');
	res.writeHeader(200, {'Content-Type': 'text/html'});
	res.write(content);
	res.end();
}
http.createServer(FundStarter).listen(process.env.PORT || 8080);
console.log('Test');
//////////////////////////////////////////////////////////////////
