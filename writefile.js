var fs  = require('fs')
fs.writeFile('mynewfile2.txt', 'Ben writefile dosyası tarafından gönderildim', function (err) { // ! içeride dosya oluşturmak ve içeriğine eklemek 
    //! içerisine Hello Contect yazısını ekledim write file ile 
    if (err) throw err ; 
    console.log("Kaydedildi");
})