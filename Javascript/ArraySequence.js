
const arr = [1,7,-6,15,9,0,2,-3]

const seq = [1,7,15,-6]

// Return True if the sequence present in the array in the same order or return false

const checkSeq = (arr,seq) => {
    let flag = 0,i = 0
        while(i < seq.length - 1){
                if(arr.indexOf(seq[i]) < arr.indexOf(seq[i + 1])){
                    flag = 1
                }
                else{
                    return false
                }
            i++
        }
    if(flag === 1){
       return true
    }
}

console.log(checkSeq(arr,seq))

