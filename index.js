var http = require('http');
var fs = require('fs');

//Part 1a:

var content = fs.readFileSync('index.html', "utf8");

function fundstarter(req, res)
{
    res.writeHeader(200, {'Content-Type': 'text/html'});
    res.write(content);
    res.end();
}
http.createServer(fundStarter).listen(process.env.PORT || 8080);
