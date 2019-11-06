function angkaPalindrome(num) {
  // you can only write your code here!
  function isPalindrome(angka) {
    var str = angka.toString();
    var rev = "";
    for (var i = str.length - 1; i >= 0; i--) {
      rev += str[i];
    }
    if (rev === str) {
      return true;
    } else {
      return false;
    }
  }

  if (isPalindrome(num) === true) {
    num++;
    while (isPalindrome(num) === false) {
      num++;
    }
  }
  while (isPalindrome(num) === false) {
    num++;
  }
  return num;
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
console.log(angkaPalindrome(2456)); // 2552
