function largestSum(arr) {
  const sortedArray = arr.sort((a, b) => a - b);
  let length = arr.length;
  if(sortedArray[0] < 0 && sortedArray[1] < 0) {
    let highestSum = sortedArray[0] * sortedArray[1] * sortedArray[length - 1];
    return highestSum;
  } else {
    let highestSum = sortedArray[length - 1] * sortedArray[length - 2] * sortedArray[length - 3];
    return highestSum;
  }
}

module.exports = {
  largestSum
};

