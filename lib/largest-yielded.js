function largestSum(arr) {
  const sortedArray = arr.sort((a, b) => a - b);
  let arrayLength = arr.length;
  if(sortedArray[0] < 0 && sortedArray[1] < 0) {
    let highestSum = sortedArray[0] * sortedArray[1] * sortedArray[arrayLength - 1];
    return highestSum;
  } else {
    let highestSum = sortedArray[arrayLength - 1] * sortedArray[arrayLength - 2] * sortedArray[arrayLength - 3];
    return highestSum;
  }
}

module.exports = {
  largestSum
};

