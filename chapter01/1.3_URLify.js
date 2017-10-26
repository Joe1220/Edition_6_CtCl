var urlify = (str,len) => {
  let myArray = str.split('')
  let result = new Array(len);
  for(let i = 0; i < myArray.length; i++) {
    if(myArray[i] === ' ') {
      result.push('%20');
    } else {
      result.push(myArray[i]);
    }
  }
  return result.join('');
}

console.log(urlify("Mr John Smith", 13));
