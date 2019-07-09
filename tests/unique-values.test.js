const { uniqueValues } = require('../lib/unique-values.js');

describe('uniqueValue tests', () => {
  it('uniqueValues returns an array without duplicates', () => {
    const noDuplicates = uniqueValues(['this', 'this', 'is', 'not', 'unique', 'unique']);
    expect(noDuplicates).toEqual(['this', 'is', 'not', 'unique']);
  });
});
