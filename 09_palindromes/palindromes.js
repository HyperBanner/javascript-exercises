const palindromes = function(str) {
  const sanitizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const arrStr = Array.from(sanitizedStr);
  if (arrStr.join("") === arrStr.reverse().join("")) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
