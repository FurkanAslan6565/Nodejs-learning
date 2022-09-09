function createArray(length) 
{
    var arr = new Array(length || 0),
    i = length;
    if(arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments,1) ;
    }
    return arr;
}
console.log(createArray(3,2))