const backSpaceCompare = (S, T) => {
  let p1 = S.length - 1;
  let p2 = T.length - 1;
  while (p1 >= 0 || p2 >= 0) {
    if (S[p1] === '#') {
      let backCount = 2;
      while (backCount > 0) {
        p1--;
        backCount--;
        if (S[p1] === '#') {
          backCount++;
        }
      }
    }
    if (T[p2] === '#') {
      let backCount = 2;
      while (backCount > 0) {
        p2--;
        backCount--;
        if (T[p2] === '#') {
          backCount++;
        }
      }
    }
  }
};

const longestSubstringwithoutRepeatingCharacters = S => {
  let max = 0;
  let start = 0;
  let end = 0;
  let map = new Map();
  while (end < S.length) {
    if (map.has(S[end])) {
      start = Math.max(map.get(S[end]) + 1, start);
    }
    map.set(S[end], end);
    max = Math.max(max, end - start + 1);
    end++;
  }
  return max;
};

const palindromePairs = words => {
  let reverseStr = [];
  let result = [];
  for (let i = 0; i < words.length; i++) {
    reverseStr.push(words[i].split('').reverse().join(''));
  }
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i !== j) {
        if (words[i] + words[j] === reverseStr[j]) {
          result.push([i, j]);
        }
      }
    }
  }
  return result;
};
