// Find a character in a given string of lenght n
const findChar = (n, bigString, charToSearch) => {
  if (n < 1 || n > 20) return null;

  const pos = String(bigString).indexOf(charToSearch);

  if (pos === -1) {
    return "Character not found.";
  } else {
    return pos;
  }
};

// Compute the sum of the even numbers and the sum of the digits of odd numbers
const computeSum = (numbersArray) => {
  if (numbersArray.length === 0) {
    return null;
  }

  let sumEven = 0,
    sumOdd = 0;

  for (let n of numbersArray) {
    n = Math.floor(n);
    if (n % 2 == 0) {
      sumEven += n;
    } else {
      while (n) {
        sumOdd += n % 10;
        n = Math.floor(n / 10);
      }
    }
  }

  return { sumEven, sumOdd };
};

module.exports = {
  findChar,
  computeSum,
};
