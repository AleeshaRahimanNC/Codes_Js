// length - total length of a string //

var str = "Hello There";
var a = str.length;
console.log(a);

// toLowerCase() & toUpperCase() //

var stri = "My name is Aleesha";
var b = stri.toLowerCase();
console.log(b);

var c = stri.toUpperCase();
console.log(c);

// startsWith() & endsWith() //

var strin = "cats are beautiful";
var result = strin.startsWith("cats");
console.log(result);    // true
var result = strin.startsWith("Cats");
console.log(result);    // false


var bir = "birds are beautiful";
var result = bir.endsWith("beautiful");
console.log(result);    // true
var result = bir.endsWith("Birds");
console.log(result);    // false

// search() methods //

var string = "Always think positive";
var l = string.search("the");
console.log(l);   //-1
var l = string.search("think");
console.log(l);  //7


// charAt() method //

var st = "Dear is black in color";
var g = st.charAt(6);
console.log(g);  //s
var g = st.charAt(11);
console.log(g); 

