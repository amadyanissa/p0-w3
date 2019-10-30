function targetTerdekat(arr) {
  // you can only write your code here!
  var ox = [];
  var xo = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "o") {
      for (var j = i; j < arr.length; j++) {
        if (arr[j] === "x") {
          ox.push(j - i);
        }
      }
    } else if (arr[i] === "x") {
      for (var j = i; j < arr.length; j++) {
        if (arr[j] === "o") {
          xo.push(j - i);
        }
      }
    }
  }
  for (var i = 0; i < ox.length; i++) {
    xo.push(ox[i]);
  }
  if (xo.length === 0) {
    return 0;
  } else {
    var sort = xo.sort();
    return sort[0];
  }
}

// TEST CASES
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
