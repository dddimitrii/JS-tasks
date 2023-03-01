function lowerCase(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function rightSpaces(str) {
  return str
    .replace(/\s+/g, " ")
    .replace(/(\s+)([.,])/g, "$2")
    .replace(/([.,])(\S)/g, "$1 $2");
}

function countWords(str) {
  const matches = str.match(/[А-Яа-яЁё]+/g) || [];
  return matches.length;
}

function countUniqueWords(str) {
  const words = str.match(/[А-Яа-яЁё]+/g) || [];
  const wordsToLowerCase = words.map((el) => el.toLowerCase());
  let result = "";
  wordsToLowerCase.forEach((el, index, array) => {
    let counter = 1;

    for (let i = index + 1; i < array.length; i++) {
      if (el == array[i]) {
        counter++;
        delete array[i];
      }
    }
    result += `${el} - ${counter}, `;
  });

  return result;
}

