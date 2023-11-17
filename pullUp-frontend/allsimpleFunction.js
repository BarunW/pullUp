// concat is to concat the string
//concat()

var str1 = "Hello";
var str2 = str1.concat(" World");
setTimeout(() =>{
    console.log(str2);
},5000);
console.log(str2);

str2 = str1.concat({});

//constructor

let name = ["a","b","c"];
console.log(name.constructor);
