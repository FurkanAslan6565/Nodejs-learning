//! Formidable modülü, özellikle dosya yüklemeleri olmak üzere form verilerini ayrıştırmak için kullanılır. 
//!Gelen form verilerini ve dosya yüklemelerini işlemek için kullanımı ve projenize entegre edilmesi kolaydır.
var http = require("http")
var formidable = require("formidable")
var fs = require("fs")
http.createServer(function (req, res) {
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm()
        form.parse(rew, function (err, fields, files) {
            var oldpath = files.filetoupload.filepath;
            var newpath = 'C:/Users/Your Name/' + files.filetoupload.originalFilename;
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end();
                console.log("Girdim")
              });
        })
    }
    else { 
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<form action="fileupload" method = "post" enctype="multipart/form-data>');
    res.write('<input type="file" name="filetupload> <br>" ')
    res.write('<input type="submit">')
    res.write('<p>  Merhaba ben calisiyorum haberin olsun benden söylemesi </p>')

    res.write('</form>')
    }
}).listen(8080)
