const { largestSum } = require('../lib/largest-yielded.js');

describe('largestSum function tests', () => {
  it('largestSum will yield 21000', () => {
    const sumOf21000 = largestSum([-10, 7, 29, 30, 5, -10, -70]);
    expect(sumOf21000).toEqual(21000);
  });

  it('largestSum will yield 1400', () => {
    const sumOf1400 = largestSum([-10, 20, 5, -7, 9]);
    expect(sumOf1400).toEqual(1400);
  });

  it('largestSum will yield 1600', () => {
    const sumOf1600 = largestSum([1, 8, -1, 10, 20]);
    expect(sumOf1600).toEqual(1600);
  });
});
