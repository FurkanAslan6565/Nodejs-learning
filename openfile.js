var fs  = require('fs');
fs.open('mynewfile3.txt','w', function (err,file){
     // ! Dosya oluşturma fonkssiyonu bu şekilde hazırlanıyor ben burda mynewFile 3 oluşturdum 
    if (err) throw err ; 
    console.log("Kaydedildi 3 ")

}) ; 