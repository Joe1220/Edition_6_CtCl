var isUnique = (string) => {
  if(string.length < 1) {
    return false;
  }
  let numCheckObj = {};
  for(let i = 0; i < string.length; i++) {
    //객체 안 문자열의 요소가 존재할지 false 리턴
    if(numCheckObj.hasOwnProperty(string[i])) {
      return false;
    //그렇지 않을 경우 각 문자열의 요소를 객체에 삽입.
    } else {
      numCheckObj[string[i]] = 0;
    }
  }
  //for문에서 반복된 문자의 요소가 반환되지 않을 경우 true 리턴
  return true;
}
