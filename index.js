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

/*
//Part 1b:
var fs = require('fs');
var http = require('http');
var filename = "index.html";

var port = Number(process.env.PORT || 8080);

var server = http.createServer(function(req, res)
{

    res.writeHead(200, {'Content-Type': 'text/html'});

	fs.readFile(filename, "utf8", function(err, con)
        {
		if(err)	throw err
		res.write(con)
		res.end();
	});

}).listen(port);

console.log("End Program");
*/

var fs = require('fs');
var http = require('http');
var filename = "index.html";

var buf = new Buffer(2490);

function readHtml(callback)
{
    fs.open(filename, 'r+', function(err, fd)
    {
        if(err) return callback(err);
    
        fs.read(fd, buf, 0, buf.length, 0, function(err, bytes)
	    {
		if(err) return callback(err);
		callback(null, buf.slice(0, bytes))
	    });
     });
}

readHtml(function(err, content)
{
    function onRequest(req, res)
    {
	res.writeHead(200, {"Content-Type": "html"})
	res.write(content)
	res.end();
    }
    http.createServer(onRequest).listen(process.env.PORT || 8080)
});
console.log("End Program");
