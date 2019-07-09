const { multipleOfN } = require('../lib/mult-by-n.js');

describe('mult-by-n tests', () => {
  it('mult-by-n returns an array with multiples of 5 up to 100', () => {
    const multBy5 = multipleOfN(5);
    expect(multBy5).toEqual([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]);
  });

  it('mult-by-n returns an array with multiples of 15 up to 100', () => {
    const multBy15 = multipleOfN(15);
    expect(multBy15).toEqual([15, 30, 45, 60, 75, 90]);
  });

  it('mult-by-n returns an empty array when 113 is passed in', () => {
    const multBy113 = multipleOfN(113);
    expect(multBy113).toEqual([]);
  });
});
