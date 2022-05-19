const rewire = require('rewire');
const process = require('process');
const leap = rewire(process.cwd() + '/leap');
const isLeap = leap.__get__('isLeap');
const countLeaps = leap.__get__('countLeaps');
const getNextLeap = leap.__get__('getNextLeap');

describe('isLeap', () => {
  test.each([
    { year: 2299, expected: false },
    { year: 2304, expected: true },
    { year: 2300, expected: false },
    { year: 2400, expected: true },
    { year: 1, expected: false },
    { year: 4000000, expected: true },
  ])('isLeap($year) is $expected', ({ year, expected }) => {
    expect(isLeap(year)).toBe(expected);
  });
});

describe('countLeap', () => {
  test.each([
    { yearArray: [], expected: 0 },
    { yearArray: [4], expected: 1 },
    { yearArray: [1999], expected: 0 },
    { yearArray: [2000], expected: 1 },
    { yearArray: [1600, 1700, 1800, 1900], expected: 1 },
    { yearArray: [2299, 2304, 2300, 2400, 1, 400000], expected: 3 },
  ])('countLeaps($yearArray) has $expected leap year(s)', ({ yearArray, expected }) => {
    expect(countLeaps(yearArray)).toBe(expected);
  });
});

describe('getNextLeap', () => {
  test.each([
    { year: 1, expected: 4 },
    { year: 2, expected: 4 },
    { year: 3, expected: 4 },
    { year: 4, expected: 8 },
    { year: 2297, expected: 2304 },
    { year: 2299, expected: 2304 },
    { year: 2400, expected: 2404 },
    { year: 4000000, expected: 4000004 },
  ])('getNextLeap($year) is $expected', ({ year, expected }) => {
    expect(getNextLeap(year)).toBe(expected);
  });
});
