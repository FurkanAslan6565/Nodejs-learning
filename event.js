var  events = require("events"); // !  Node.js events modülü çeşitli eylemler için olay tanımlamaya imkan verir
var  eventEmitter  = new events.EventEmitter(); 
var myEventHandler = function (){
    console.log ('I hear scream');
}
eventEmitter.on("scream", myEventHandler)
eventEmitter.emit('scream')
/*
* !!
!EventEmitter Metodları
! on(event, listener) : 
Belirtilen olay için listener dizisinin sonuna bir dinleme ekler. 
Dinlemenin eklenmiş olup olmadığını görmek için herhangi bir kontrol yapılmaz.
Aynı olay ve dinleyiciyi bir araya getiren birden fazla çağrı, dinlemenin birden fazla kez eklenmesine neden olur. Çağrılar zincirlenebilir.
!addListener(event, listener): 
“on” özelliği için takma ad.  (İşlevi aynı)
once(event, listener):
Olaya bir kerelik dinleyici ekler. Bu dinleyici, yalnızca olayı tetiklediğinde, yani kaldırıldıktan sonra çağrılır. Verici gönderir, bu nedenle çağrılar zincirlenebilir.
!removeListener(event, listener): 
Belirtilen olay için listener dizisinden bir dinleme kaldırır. Listener dizisinin indisleri güncellenir. removeListener,
Listener dizisinden en fazla bir örneğini kaldıracaktır. Birden fazla dinlemeyi kaldırmak için removeListener birden çok kez çağrılmalıdır. Yapı, zircirli bir şekilde çalışır.
removeAllListeners([event]):
Belirli bir olay için tüm dinlemeleri kaldırır.
!setMaxListeners(n): 
Belirli bir olay için 10’dan fazla dinleme eklendiğinde EventEmitter uyarı üretir. Ancak bazı durumlarda 10’dan fazla dinlemeye ihtiyaç olabilir. Bu durumu ayarlamak için bu fonksiyon kullanılır.
!listeners(event): 
Belirli bir olay için listener dizisini döndürür.
!emit(event, [arg1], [arg2], […]): 
Argümanlara göre sırayla her dinlemeyi çalıştırır. Eğer dinlemeler var ise true, aksi takdirde false döndürür.
!listenerCount(emitter, event):
 Verilen bir olay için dinleme sayısını döndürür.
?event − String: olay adı
?listener − Function: olay fonksiyonu
?Bir olay bir listener’a eklendikten sonra herhangi bir zamanda ortaya çıkar. Bir olay tetiklendiğinde, 
?dinleyici olayın Listener dizisine henüz eklenmemiş olabilir.
*/
