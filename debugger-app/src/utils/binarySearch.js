export function binarySearch(arr, target, comparator) {
  let low = 0,
    high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let compare = comparator(arr[mid], target);
    if (compare === 0) return mid;
    else if (compare < 0) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}
