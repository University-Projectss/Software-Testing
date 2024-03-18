//Testare functionala, structurala si cu mutatii
const readline = require("node:readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getInput = async (prompt = "") => {
  return new Promise((resolve) => {
    readline.question(prompt, (answer) => {
      resolve(answer);
    });
  });
};

// #1 Implementare exemplu de testare functionala din cursul 1
const findNumberInString = (n, bigString, charToSearch) => {
  if (String(bigString).length !== n || typeof n !== "number") return null;

  const pos = String(bigString).indexOf(charToSearch);

  if (pos === -1) {
    return "Character not found.";
  } else {
    return pos;
  }
};

module.exports({
  findNumberInString,
});
