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
  expect(findChar(n, bigString, charToSearch)).toBe(
    bigString.indexOf(charToSearch)
  );

  ///////////
  //frontiera
  bigString = generateRandomString(1);
  charToSearch = bigString[0];
  expect(findChar(1, bigString, charToSearch)).toBe(
    bigString.indexOf(charToSearch)
  );

  bigString = generateRandomString(20);
  charToSearch = bigString[19];
  expect(findChar(20, bigString, charToSearch)).toBe(
    bigString.indexOf(charToSearch)
  );

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

  bigString = generateRandomString(n);
  charToSearch = generateRandomString(1);
  expect(findChar(0, bigString, charToSearch)).toBe(null);

  bigString = generateRandomString(n);
  charToSearch = generateRandomString(1);
  expect(findChar(2, bigString, charToSearch)).toBe(null);

  bigString = generateRandomString(n);
  charToSearch = generateRandomString(1);
  expect(findChar(19, bigString, charToSearch)).toBe(null);

  bigString = generateRandomString(n);
  charToSearch = generateRandomString(1);
  expect(findChar(21, bigString, charToSearch)).toBe(null);

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

//ChatGPT generated tests
describe("findChar function", () => {
  it("should return the position of the character if found", () => {
    const position = findChar(10, "Hello, World!", "o");
    expect(position).toBe(4);
  });

  it('should return "Character not found." if the character is not found', () => {
    const result = findChar(10, "Hello, World!", "x");
    expect(result).toBe("Character not found.");
  });

  it("should return null if n is less than 1", () => {
    const result = findChar(0, "Hello, World!", "o");
    expect(result).toBeNull();
  });

  it("should return null if n is greater than 20", () => {
    const result = findChar(21, "Hello, World!", "o");
    expect(result).toBeNull();
  });
});

describe("computeSum function", () => {
  it("should compute the sum of even numbers and the sum of digits of odd numbers", () => {
    const result = computeSum([12, 345, 678]);
    expect(result).toEqual({ sumEven: 690, sumOdd: 12 });
  });

  it("should return null if the array is empty", () => {
    const result = computeSum([]);
    expect(result).toBeNull();
  });

  it("should ignore non-integer numbers", () => {
    const result = computeSum([12, "abc", 34]);
    expect(result).toEqual({ sumEven: 46, sumOdd: 0 });
  });
});
