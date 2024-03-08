//reverse each word in a given string//

function reverse(str,substr){
return str.split(substr).reverse().join(substr);
}
let str = "Welcome to this javascript series!";
let str1 = reverse(str,"");
let str2 = reverse(str1," ");
console.log(str1);  // !seires tpircsavaj siht ot emocleW
console.log(str2);  // emocleW ot siht tpircsavaj !seires
