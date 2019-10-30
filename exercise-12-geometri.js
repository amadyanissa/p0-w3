function tentukanDeretGeometri(arr) {
  // you can only write your code here!
  var bagi = [];
  for (var i = 0; i < arr.length; i++) {
    if (!arr[i + 1]) {
      break;
    } else {
      bagi.push(arr[i + 1] / arr[i]);
    }
  }
  for (var i = 0; i < bagi.length; i++) {
    if (!bagi[i + 1]) {
      break;
    } else {
      if (bagi[i] !== bagi[i + 1]) {
        return false;
      }
    }
  }
  return true;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
