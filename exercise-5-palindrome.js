function palindrome(kata) {
  // you can only write your code here!
  var sama = 0;
  var nospasi = "";
  for (var i = 0; i < kata.length; i++) {
    if (kata[i] !== " ") {
      nospasi += kata[i];
    }
  }
  for (var i = 0; i < nospasi.length; i++) {
    if (nospasi[i] === nospasi[nospasi.length - 1 - i]) {
      sama++;
    }
  }
  if (sama === nospasi.length) {
    return true;
  } else {
    return false;
  }
}

// TEST CASES
console.log(palindrome("katak")); // true
console.log(palindrome("blanket")); // false
console.log(palindrome("civic")); // true
console.log(palindrome("kasur rusak")); // true
console.log(palindrome("mister")); // false
