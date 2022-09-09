var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february'
var q = url.parse(adr,true)

console.log(q.host) // returns 'localhost:8080' //! bize host adresini donecek 
console.log(q.pathname); //returns '/default.htm'  //!  bize  olduğumuz sayfayı donecel 
console.log(q.search) //returns '?year=2017&month=february' //! bize aradığımız kısmı bize donecek 

var qdata =  q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); //returns 'february'
 