//Testare functionala, structurala si cu mutatii

// #1 Implementare exemplu de testare functionala din cursul 1
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

//Testare structurala
//to do

module.exports = {
  findChar,
};
