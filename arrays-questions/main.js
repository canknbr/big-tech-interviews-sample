const findTwoSum = (arr, target) => {
  const hash = {};
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (hash[complement]) {
      return [hash[complement], i];
    }
    hash[arr[i]] = i;
  }
  return [];
};

const getMaxWaterContainer = arr => {
  let max = 0;
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const water = Math.min(arr[left], arr[right]) * (right - left);
    max = Math.max(max, water);
    if (arr[left] < arr[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};

const trappingRainWater = arr => {
  let left = 0;
  let right = arr.length - 1;
  let max = 0;
  let leftMax = 0;
  let rightMax = 0;
  while (left < right) {
    leftMax = Math.max(leftMax, arr[left]);
    rightMax = Math.max(rightMax, arr[right]);
    if (leftMax < rightMax) {
      max += leftMax - arr[left];
      left++;
    } else {
      max += rightMax - arr[right];
      right--;
    }
  }
  return max;
};
