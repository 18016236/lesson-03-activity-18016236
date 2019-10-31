array1 = [['a', 'b'],['c', 'd']];
var def = array1.toString();
console.log(def);
var del = (array)=> array1.toString().split(",").join("-");
console.log(del(array1));

