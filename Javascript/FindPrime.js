const arr = [4,5,8,9,11,7,1]

const FindPrimeNums = (arr) => {
    arr.forEach(item => {
        let flag = 0
        if (item == 1){
            flag = 1
        }
        else{
            for(let i = 2;i < item;i++){
                if (item % i == 0){
                flag = 1
                }
            }
            if (flag == 0){
                console.log(item)
            }
        }
    })
}

console.log("Prime numbers from an array: ")
FindPrimeNums(arr)