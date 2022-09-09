var http = require('http'); 
var fs = require('fs'); 
// ! FS modül tüm dosya okuma, yazma, izin verme gibi işlemlerinizi gerçekleştirmenizi yarayan fonksiyonların bulunduğu bir modüldür. 
http.createServer(function(req,res) {
    fs.readFile('demofile.html', function(err,data) {
        res.writeHead(200,{'Content-Type': 'text/html'})
        res.write(data);
        return res.end();
    })
}).listen(8080);
console.log( "sndjajs")
