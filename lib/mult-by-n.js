function multipleOfN(n) {
  const numArray = [];
  for(let i = 1; i <= (100 / n); i++) {
    numArray.push(i * n);
  }
  return numArray;
}


module.exports = {
  multipleOfN,
};
