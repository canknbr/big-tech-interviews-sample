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
