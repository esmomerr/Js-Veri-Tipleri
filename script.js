// String
const isim = "Ömer Esim";
console.log(typeof isim);

// Value
const yas = 25;
console.log(typeof yas);

//Boolean
let isLoggedIn = false
console.log(typeof isLoggedIn);

// Undefined
let u;
console.log(typeof u);

// Null
let n = null;
console.log(n);

// Symbol
const sym = Symbol('X');
console.log(typeof sym);

// BigInt
const bigInt = 131232133123211323213123113213213n;
console.log(typeof bigInt);

// Object
const person = {
    isim: "Ömer",
    soyisim: "Esim",
    yas:25
}
console.log(typeof person);

// Object - Function
function sayHello(){
    return "Hello World!";
}
console.log(typeof sayHello);

// Object - Array
const arr = [1,2,3,"Hello",true,,Symbol('X'),{fName:"Ömer",lName:"Esim"}];
console.log("Dizi:",arr);

// Object - Math
const random = Math.random();
console.log("Math Object",random);

// Object - Date
const date = new Date();
console.log("Date Object",date);

// Object - Map
let map = new Map();
map.set("isim","Ömer");
map.set("soyisim","Esim");
console.log("Map Object",map);

// Object - Set
const set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(true);
set.add();
console.log("Set Object",set);