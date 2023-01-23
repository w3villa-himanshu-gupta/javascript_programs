let arr=  [
    {id: 1, price: 10},
    {id: 2, price: 20},
    {id: 3, price: 30},
    {id: 4, price: 05},
    {id: 3, price: 60},
    {id: 3, price: 5},

  ];
let new_arr= arr.filter(checkPrice);
console.log(new_arr);
function checkPrice(param){
    
    if(param.price>10){
     return param;
    } 
}


