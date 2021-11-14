const arr = [12,35,10,85,34,1,78]


const secondHighest = (arr) => {
   let max = -Infinity,smax = -Infinity
   for(let i = 0;i < arr.length ; i++){
       if (arr[i] > max){
           [smax,max]= [max,arr[i]]
       }
       else if (arr[i] < max && arr[i] > smax){
           smax = arr[i]
       }
   }
   return smax

}

console.log("Second highest element of the array : ", secondHighest(arr))
