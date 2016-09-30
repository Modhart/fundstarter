/*
//Part 1a:
var fs = require('fs');
var filename = "index.html";
var http = require('http');

var port = Number(process.env.PORT || 8080);

var content = fs.readFileSync(filename, "utf8");

var run = function(req, res)
{
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(content);
};

var server = http.createServer(run);
server.listen(port);
*/

//Part 1b:
var fs = require('fs');
var http = require('http');
var filename = "index.html";

var port = Number(process.env.PORT || 8080);

http.createServer(function(req, res)
{
	fs.readFile(filename, "utf8", function(err, con)
        {
		if(err)
		{
			res.writeHead(500);
			res.end();
		}
		else
                {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(con, 'utf8');
		}
	 });
});
