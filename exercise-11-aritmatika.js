function tentukanDeretAritmatika(arr) {
  // you can only write your code here!
  var selisih = [];
  for (var i = 0; i < arr.length; i++) {
    if (!arr[i + 1]) {
      break;
    } else {
      selisih.push(arr[i + 1] - arr[i]);
    }
  }
  for (var i = 0; i < selisih.length; i++) {
    if (!selisih[i + 1]) {
      break;
    } else {
      if (selisih[i] !== selisih[i + 1]) {
        return false;
      }
    }
  }
  return true;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
