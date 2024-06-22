const palindromes = function (string) {
  const everything = "abcdefghijklmnopqrstuvwxyz0123456789";
  const omittedString = string
    .toLowerCase()
    .split("")
    .filter((character) => everything.includes(character))
    .join("");

  const reversedString = omittedString.split("").reverse().join("");
  if (omittedString === reversedString) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
