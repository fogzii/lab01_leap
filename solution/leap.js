// ========================================================================= //
// isLeap solutions
// ========================================================================= //

/**
 * Solution 1 - direct translation from wikipedia's algorithm
 * https://en.wikipedia.org/wiki/Leap_year#Algorithm
 */
function isLeap(year) {
  if (year % 4 !== 0) {
    return false;
  } else if (year % 100 !== 0) {
    return true;
  } else if (year % 400 !== 0) {
    return false;
  }
  return true;
}

/**
 * Solution 2 - more concise
 * https://stackoverflow.com/a/16353241/16835046
 */
function isLeapShortened(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

/**
 * Solution 3 - using the Date object
 * https://stackoverflow.com/a/43819507/16835046
 */
function isLeapWithDate(year) {
  // Noting that month "1" is February, since we count from 0.
  // Note also that this method will not work for large years, e.g. 40000000
  return new Date(year, 1, 29).getDate() === 29;
}

// ========================================================================= //
// countLeaps solutions
// ========================================================================= //

/**
 * Solution 1 - Simple c-style for-loop
 */
function countLeaps(yearArray) {
  let count = 0;
  for (let i = 0; i < yearArray.length; i++) {
    if (isLeap(yearArray[i])) {
      count++;
    }
  }
  return count;
}

/**
 * Solution 2 - using for-of loop
 */
function countLeapsAlternative(yearArray) {
  let count = 0;
  for (const year of yearArray) {
    if (isLeap(year)) {
      count++;
    }
  }
  return count;
}

/**
 * Solution 3 - using array filter
 */
function countLeapsFilter(yearArray) {
  /**
     * Equivalent to:
     *     return yearArray.filter(n => isLeap(n)).length
     * but takes advantage of "currying"
     */
  return yearArray.filter(isLeap).length;
}

// ========================================================================= //
// getNextLeap solutions
// ========================================================================= //

function getNextLeap(year) {
  // Skipping current year regardless
  let nextLeap = year + 1;
  while (isLeap(nextLeap) === false) {
    nextLeap++;
  }
  return nextLeap;
}

function getNextLeapAlternative(year) {
  while (!isLeap(++year));
  return year;
}
