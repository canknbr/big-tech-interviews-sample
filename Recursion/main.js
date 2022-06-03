const kthLargest = (arr, left, right) => {
  if (left === right) return arr[left];
  let pivot = partition(arr, left, right);
  if (pivot === k) return arr[pivot];
  else if (pivot > k) return kthLargest(arr, left, pivot - 1);
  else return kthLargest(arr, pivot + 1, right);
};
const partition = (arr, left, right) => {
  let pivot = arr[right];
  let i = left;
  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      swap(arr, i, j);
      i++;
    }
  }
  swap(arr, i, right);
  return i;
};
const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};
