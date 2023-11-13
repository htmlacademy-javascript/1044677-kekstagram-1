const isPalindrome = (string) => {
  string = string
    .toUpperCase()
    .replaceAll(' ', '');
  let reversedString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string.at(i);
  }
  return (string === reversedString);
};


const getNumber = (string) => {
  string = string.toString();
  let data = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      data += string.at(i);
    }
    // !Number.isNaN(parseInt(string.at(i), 10)) ? data += string.at(i):
  }
  return (parseInt(data, 10));
};


function getString (string, lengthMin, addString) {
  addString = addString.slice(0, 3);
  if (string.length > lengthMin) {
    return string;
  }
return addString + string
};



const isLengthAcceptable = (string, length) => {
  return (string.length <= length);
}