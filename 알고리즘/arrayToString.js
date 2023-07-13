function arrayToString(arr) {
  return arr.reduce((acc, cur) => (acc += String(cur)), "");
}
