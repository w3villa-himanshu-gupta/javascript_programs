radius=[3,4,5,6];
const area=function(radius){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(Math.PI*radius[i]*radius[i]);
    }
    return output;
}
console.log(area(radius));
const circumference=function(radius){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(2*Math.PI**radius[i]);
    }
    return output;
}
console.log(circumference(radius));