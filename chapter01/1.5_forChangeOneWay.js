var oneWay = (str1, str2) => {
  //두 문자열이 다를 때를 확인하는 변수 선언
  let foundDiff = false;
  if(Math.abs(str1.length - str2.length) > 1) {
    return false;
  } else if (str1 === str2) {
    return true;
  }

  let index1 = 0, index2 =0;
  while(index1 < str1.length && index2 < str2.length) {
    if(str1[index1++] !== str2[index2++]) {
      if(foundDiff) return false;

      if(str1.length > str2.length) {
        index2--;
      } else if(str2.length > str1.length) {
        index1--;
      }
      foundDiff = true;
    }
  }
  return true;
}

console.log(oneWay("pale", "ple")); //true
console.log(oneWay("pales", "pale")); //true
console.log(oneWay("pale", "bale")); //true
console.log(oneWay("pale", "bake")); // false
