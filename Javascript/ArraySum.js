const arr1 = [1,2,3,4,9,6]
const arr2 = [8,4,5,6,3,1]

const arraySum = (arr1,arr2) => {
    const res = arr1.reduce((prev,curr,ind) => {
        return prev + curr + arr2[ind]
    })

    return res
}

console.log("Sum of Array : ",arraySum(arr1,arr2))