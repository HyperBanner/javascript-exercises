const getTheTitles = function(array) {
  let newArray = [];
  array.forEach((item) => {
    for (let key in item) {
      if (key === "title") {
        newArray.push(item[key]);
      }
    }
  });
  return newArray;
};

// Do not edit below this line
module.exports = getTheTitles;
