var checkPermute = (str1, str2) => {
  //두 문자열의 길이가 다른 경우 false 반환
  if(str1.length !== str2.length) {
    return false;
  }

  //두 문자열을 정렬 하고, 비교
  let sortedStr1 = str1.split('').sort((a,b) => a-b).join('');
  let sortedStr2 = str2.split('').sort((a,b) => a-b).join('');

  return sortedStr1 === sortedStr2;
}
