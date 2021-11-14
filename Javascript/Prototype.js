let nums = [5,4,6,7,1,2]

Array.prototype.MinMax = function(){
    let max = this[0],min = this[0]
    for (let i =1; i < this.length; i++){
            if (this[i] > max){
                max = this[i]
            }
            else if (this[i] < min){
                min = this[i]
            }
    }
    console.log(min,max)
    return max + min 
};

console.log(nums.MinMax())