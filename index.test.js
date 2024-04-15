const { findChar, computeSum } = require("./index");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const charaters = [
  " ",
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "{",
  "|",
  "}",
  "~",
];

function generateRandomString(length) {
  let randomString = "";
  const arrayLength = charaters.length;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * arrayLength);
    randomString += charaters[randomIndex];
  }

  return randomString;
}

//Testare Functionala
test("Functional Testing", () => {
  let n, bigString, charToSearch;

  n = getRandomInt(-100000, 0);
  bigString = generateRandomString(n);
  charToSearch = generateRandomString(1);
  expect(findChar(n, bigString, charToSearch)).toBe(null);

  n = getRandomInt(21, 100000);
  bigString = generateRandomString(n);
  charToSearch = generateRandomString(1);
  expect(findChar(n, bigString, charToSearch)).toBe(null);

  n = getRandomInt(1, 20);
  bigString = generateRandomString(n);
  let pos = getRandomInt(0, n - 1);
  charToSearch = bigString[pos];
  expect(findChar(n, bigString, charToSearch)).toBe(pos);

  ///////////
  //frontiera
  bigString = generateRandomString(1);
  charToSearch = bigString[0];
  expect(findChar(1, bigString, charToSearch)).toBe(0);

  bigString = generateRandomString(20);
  charToSearch = bigString[19];
  expect(findChar(20, bigString, charToSearch)).toBe(19);

  bigString = generateRandomString(1);
  charToSearch = generateRandomString(1);
  while (bigString.includes(charToSearch)) {
    charToSearch = generateRandomString(1);
  }
  expect(findChar(1, bigString, charToSearch)).toBe("Character not found.");

  bigString = generateRandomString(20);
  charToSearch = generateRandomString(1);
  while (bigString.includes(charToSearch)) {
    charToSearch = generateRandomString(1);
  }
  expect(findChar(20, bigString, charToSearch)).toBe("Character not found.");

  //frontiera
  ///////////

  n = getRandomInt(1, 20);
  bigString = generateRandomString(n);

  charToSearch = generateRandomString(1);
  while (bigString.includes(charToSearch)) {
    charToSearch = generateRandomString(1);
  }
  expect(findChar(n, bigString, charToSearch)).toBe("Character not found.");
});

test("Structural Testing", () => {
  let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  expect(computeSum([])).toBe(null);
  expect(computeSum(testArray)).toStrictEqual({ sumEven: 20, sumOdd: 25 });
});
