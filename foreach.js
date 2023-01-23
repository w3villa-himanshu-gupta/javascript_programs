const arr=["hello",1,2,"himanshu"];
arr.forEach(myfunction);
function myfunction(value){
    console.log(value);
}
console.log("Using for in loop")
arr.push(14,16,"hye");
for(let index in arr){
    console.log(arr[index]);
}
console.log("Using for of loop");
arr[arr.length]="special Person";
for(let x of arr){
    console.log(x);
}
console.log("arr is the array or not");
console.log(Array.isArray(arr));