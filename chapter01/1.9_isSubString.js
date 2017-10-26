var isSubString = (str1, str2) => {
  if (!str1 || !str2) {
    throw new Error('invalid input');
  }
  return (str1 + str2).includes(str2);
}
