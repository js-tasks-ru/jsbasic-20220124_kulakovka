function getMinMax(str) {
  let arr = str.split(' ').map(item => +item).filter(item => !isNaN(item));
  let min = arr[0];
  let max = arr.length - 1;
  let result = {};

  arr.forEach((item) => {
    if ( min > item) {
      min = item;
    }
    if ( max < item) {
      max = item;
    }
  });
  result.min = min;
  result.max = max;
  return result;
}
