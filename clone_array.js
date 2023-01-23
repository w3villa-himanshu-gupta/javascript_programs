console.log("using slice method");
let arr1 =['hello','himanshu','satyam'];
let arr2=arr1.slice(0);
arr1.push("seeju");
console.log(arr1);
console.log(arr2);
console.log("add extra element in second using slice method");
const arr11=['hello','baby','how'];
const arr22=arr11.slice(0).concat('are','you');
console.log(arr11);
console.log(arr22);


//method two
console.log("using concat method")
const fruits=['apple','banana','grapes'];
const fruits1 =[].concat(fruits)
fruits.push("baby");
console.log(fruits);
console.log(fruits1);

console.log("add extra element in second using concat method");
const fruits11=['guava','apple','pomeogranate'];
const fruit22=[].concat(fruits11,['delicious','amazing fruit']);
console.log(fruits11);
console.log(fruit22);
//method three
console.log("Using spread opeartor");
const veg=['onion','tomato','peas'];
const veg1=[...veg];
veg.push("papaya");
console.log(veg);
console.log(veg1);
console.log("add extra element in second using spread method");
const color =['red','blue','pink'];
const color11 = [...color,'skyblue','purple'];
console.log(color);
console.log(color11);