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

isPalindrome();


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

getNumber();


const getString = (string, lengthMin, addString) => {
  const currentAddString = lengthMin - string.length;
  if (string.length >= lengthMin || currentAddString <= 0) {
    return string;
  }
  const cutAddString = addString.slice(0, currentAddString % addString.length);
  const repeatAddString = addString.repeat(currentAddString / addString.length);

  return cutAddString + repeatAddString + string;
};

getString();


const isLengthAcceptable = (string, length) => (string.length <= length);

isLengthAcceptable();
