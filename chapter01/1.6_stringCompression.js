var strComp = str => {
  let result = [];
  let count = 1;
  for(let i = 0; i < str.length-1; i++) {
    //연속된 문자 요소가 다를 경우 문자와 연속되었던 수 추가
    if(str[i] !== str[i+1]) {
      result.push(str[i]);
      result.push(count);
      count=0;
    }
    count++;
  }
  result.push(str[str.length-1]);
  result.push(count);
  return result.join('');
}

console.log(strComp("aabcccaaa"));
