
//Part 1a:
var http = require('http');
var fs = require('fs');

function fundstarter(req, res)
{
    var content = fs.readFileSync('index.html');
    res.writeHeader(200, {'Content-Type': 'text/html'});
    res.write(content);
    res.end();
}
http.createServer(fundStarter).listen(process.env.PORT || 8080);
