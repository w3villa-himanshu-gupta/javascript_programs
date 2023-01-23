let str1="    himanshu          ";
console.log(str1);
console.log("</br>");
console.log(str1.length);
console.log("</br>");
console.log("<h1>Now we trim the string</h1>");
let str2= str1.trim();
console.log(str2);
console.log("</br>");
console.log(str2.length);

console.log("<h3><br>Upper Case Function<h3>");
let str3=str1.toUpperCase();
console.log("Your Upper Case String is below</br><br>");
console.log(str3);

console.log("<h3><br>Now this upper string is convert to lower case String");
let str4=str3.toLowerCase();
console.log("Your Upper Case String is below</br><br>");
console.log(str4);

console.log("<h1>Slicing of String");
console.log("<br>Now we print only ansh from himanshu");
let str="himanshu";
console.log(str.length);
console.log("<br>");
let str5 = str.slice(3,str.length);
console.log(str5);
console.log("<br>");
let str6=str.slice(-1,5);
console.log(str6);

console.log("<br>StartsWith method in js <br>");
let b=str.startsWith("h");
console.log(b);

console.log(swapCase("abcDDfg"));

