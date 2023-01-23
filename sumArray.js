let arr=[1,2,3,6,9,15,18,20];
// let sum=22;
for(let i=0;i<arr.length;i++){
    
    for(let j=i;j<arr.length;j++){
        if(arr[i]+arr[j]==22){
            console.log(arr[i],arr[j]);
        }
    }
}