//Testare functionala, structurala si cu mutatii

// Gaseste un caracter intr un sir dat de lungime n
const findChar = (n, bigString, charToSearch) => {
  if (
    n < 1 ||
    n > 20 ||
    String(bigString).length !== n ||
    typeof n !== "number"
  )
    return null;

  const pos = String(bigString).indexOf(charToSearch);

  if (pos === -1) {
    return "Character not found.";
  } else {
    return pos;
  }
};

// Calculeaza suma numerelor pare si suma cifrelor numerelor impare dintr-un array dat
const computeSum = (numbersArray) => {
  if (numbersArray.length === 0) {
    return null;
  }

  let sumEven = 0,
    sumOdd = 0;

  for (let n of numbersArray) {
    n = Math.floor(n); //lucram doar cu numere intregi
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

computeSum([1, 2, 3, 4]);

module.exports = {
  findChar,
  computeSum,
};
