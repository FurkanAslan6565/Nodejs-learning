 //! My  new file dosyasını silmeye çalışalım 
 var fs =  require('fs'); 
 fs.unlink('mynewfile.txt', function(err){
    if(err) throw err ; 
    console.log("Dosya silindi") //  ! başarıyla oluşturuldu

 })