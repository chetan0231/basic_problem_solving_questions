const arr = [1, 87, 4, 5, 8, 6, 55, 9];

const decendOrder = (arr) => {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

console.log(decendOrder(arr));
