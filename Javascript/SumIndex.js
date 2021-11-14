const arr1 = [1,2,3,4,9,6]
const arr2 = [8,4,5,6,3,1]

const sumOfEachIndex = (arr1,arr2) => {
    const resArr = arr1.map((item,ind) => {
        return item + arr2[ind]
    })
    return resArr   
}

console.log(sumOfEachIndex(arr1,arr2))
