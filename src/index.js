module.exports = function check(str, bracketsConfig) {
  let arr1 = [];
  let arr2 = [];
  bracketsConfig.forEach(el => {
    arr1.push(el[0]);
    arr2.push(el[1]);
  });
  let stack = [];
  str = str.split("");
  for (let el of str) {
    if (arr1.indexOf(el) == arr2.indexOf(el) && el == stack[stack.length - 1]) stack.pop();
    else
      if (arr1.indexOf(el) != -1) stack.push(el);
      else {
        let r = stack.pop();
        if ((arr1.indexOf(r) != arr2.indexOf(el)) || arr1.indexOf(r) == -1)
          return false;
      }
  }
  return !stack.length;
}
