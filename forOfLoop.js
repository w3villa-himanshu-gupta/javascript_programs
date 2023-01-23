const arr=['hello','hye','apple','banana'];
for (let arr1 of arr){
    console.log(arr1);
}

let arr11=[12,13,34,12,13,34,5];
for(let i=0;i<arr11.length;++i){
    let temp=arr11[i];
    let count=0;
    for(let j=0;j<arr11.length;++j){
        if(arr11[j]==temp){
            count=count+1;
            // console.log(count);

        }
       
       
    }
    
    if(count==1){
        console.log(arr11[i]);
    }
}

let num = [12,11,13,12,13];
for(let i=0;i<num.length;i++){
    let count=0;
       if(num[i]==num[i+1]){
        count++;
        console.log(count);
    }
    if(count==1){
        console.log(num[i]);
    }
}