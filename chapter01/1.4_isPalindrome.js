var isPalindrom = (str) => {
  var myStr = str.toLowerCase().split('');
  if (str.length < 1) {
    return false;
  }
  var subObj = {};
  var count = 0;
  for (let i = 0; i < myStr.length; i++) {
    if (myStr[i] === ' ') {
      continue;
    } else if (!subObj.hasOwnProperty(str[i])) {
      subObj[myStr[i]] = 1;
    } else {
      subObj[myStr[i]]++;
    }
  }
  for (let key in subObj) {
    if (subObj[key] % 2 === 1) {
      count++;
    }
  }
  return (count === 1 || count === 2) ? true : false;
}

console.log(isPalindrom("Tact Coa"));
