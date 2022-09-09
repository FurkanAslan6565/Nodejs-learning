var fs  = require('fs');
fs.appendFile("mynewfile.txt",'Ben append file dosyası tarafından gönderildim', function(err){ 
    // ! yeni bir dosya oluşturmak için kullanılan yapı içerisine hello word yazısını ekledim 
    if (err) throw err ;
    console.log('Kaydedildi'); 
}); 


fs.rename("mynewfile.txt",'Değiştiricelke isim', function(err){  //! Dosya ismi deeğişikliği için kullanıcak fonksiyon 
    if (err) throw  err ; /// throw hatayı fırlatır 
    console.log("Kaydedildi")

})
