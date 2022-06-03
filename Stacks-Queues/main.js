const validParentheses = parens => {
  let stack = [];
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === '(') {
      stack.push(parens[i]);
    } else {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
};

const minimumBracketstoRemove = s => {
  let left = 0;
  let right = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      left++;
    } else {
      right++;
    }
  }
  return Math.abs(left - right);
};
