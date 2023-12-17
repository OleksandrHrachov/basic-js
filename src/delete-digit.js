const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  const numArr = n.toString().split('');
  
  let maxVal = 0;

  for ( let i = 0; i < numArr.length; i++) {
    const tempArr = [...numArr];

    tempArr.splice( i, 1 );
    const res = tempArr.join('');

    if (Number(res) > maxVal) {
      maxVal = Number(res);
    }
  }

  return maxVal;
}

module.exports = {
  deleteDigit
};
