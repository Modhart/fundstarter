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
