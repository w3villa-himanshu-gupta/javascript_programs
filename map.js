const x=new Map();

//create mapp
const fruits=new Map([["apple",500],["banana",400],["guava",30]]);
console.log(fruits);

//set the value using set method

x.set("a",5);
x.set("b",6);


console.log(x);

//create map another my practical way
const myway=new Map([[1,"himanshu"],[2,"Seeeju"]]);
console.log(myway);
myway.set(1,"Seejal");
console.log(myway);

console.log(myway.get(2));
console.log(fruits.get("apple"));
console.log("size of a fruits is : "+fruits.size);
console.log("Delete one key in fruits");
fruits.delete("apple");
console.log(fruits);




select pc.*, count(l.Id) as likes 
from (
    select p.*, count(c.Id) as comments 
    from POST p 
    left join Comment c on c.PostId = p.ID 
    group by p.ID) pc 
left join LIKES l on l.PostId = pc.ID 
group by l.PostId;
