var http = require('http')
const { listenerCount } = require('process')
var uc = require('upper-case')
http.createServer(function(req,res) {
    // res.writeHead(200,{'Content-Type' : 'text/html'}) // !  Yazmasam da çalışıyor 
    res.write(uc.upperCase("Hello Worlad ! "))
    res.end();
}).listen(8080);