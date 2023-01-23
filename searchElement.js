// let arr=[12,3,44,5,18];
function search(x){
    let arr=[12,23,44,55];
    for(let i=0;i<arr.length;i++){
        if(arr[i]==x){
            return i;
        }
    }
    return -1;

}
z=search(44);
console.log(z);
