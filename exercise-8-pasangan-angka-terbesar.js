function pasanganTerbesar(num) {
  // you can only write your code here!
  var pasangan = [];
  var numstr = num.toString();
  for (var i = 0; i < numstr.length; i++) {
    if (!numstr[i + 1]) {
      break;
    }
    pasangan.push(numstr[i] + numstr[i + 1]);
  }
  var sort = pasangan.sort();
  return Number(sort[sort.length - 1]);
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
