function uniqueValues(arr) {
  const noDuplicates = new Set(arr);
  const newArray = [...noDuplicates];
  return newArray;
}

module.exports = {
  uniqueValues
};
