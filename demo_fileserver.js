var http  =require('http') //! var olan paketi eklemek 
var url = require('url')
var fs =  require('fs')

http.createServer(function(req,res){ 
    var q = url.parse(req.url ,true) // ! parse dönüştürme yapar  
    var filename = "."  + q.pathname 
    fs.readFile(filename, function(err,data) {
        if (err ) {
        // res.writeHead(404,{'Content-Type': 'text/html'}) // ! olmasada  çalıştı nedenini bilmiyorum : )  öğrencem !!
        return res.end('404 Not found  '); // ! hata dönerse  diye sayfada aldığımız yanıt bu olacak 
        } 
        res.writeHead(200,{'Content-Type': 'text/html'}) //! writeHead()uygulamanın istemciye sunacağı yanıtın başlığını yazmak için çağrılır.
        res.write(data)
        return res.end() 
   })
    //!  pathname URL'nin ana bilgisayardan sonra ve varsa ilk eğik çizgi de dahil olmak üzere sorgudan önce gelen yol bölümüdür.
}).listen(8080); // ! çağırmak istediğin adres localhost
