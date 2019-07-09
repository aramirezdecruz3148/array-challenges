const { intersection } = require('../lib/intersection');

describe('intersection tests', () => {
  it('intersection function returns the intersection of two number arrays', () => {
    const commonValues = intersection([1, 4, 6, 8], [7, 8, 4, 0]);
    expect(commonValues).toEqual([4, 8]);
  });

  it('intersection function returns the intersection of two string arrays', () => {
    const commonValues = intersection(['this', 'is', 'an', 'array'], ['this', 'is', 'something', 'else']);
    expect(commonValues).toEqual(['this', 'is']);
  });
});
