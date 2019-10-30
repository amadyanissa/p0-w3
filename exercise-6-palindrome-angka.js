function angkaPalindrome(num) {
  // you can only write your code here!
  if (num < 10) {
    return num + 1;
  } else {
    var middle = "";
    var left = "";
    var right = "";
    var numberleft = 0;
    var numstr = num.toString();
    if (numstr.length % 2 === 0) {
      for (var i = 0; i < numstr.length; i++) {
        if (i < numstr.length / 2) {
          left += numstr[i];
        } else {
          right += numstr[i];
        }
      }
      if (Number(left) < Number(right)) {
        numberleft = Number(left) + 1;
        var numleftstr = numberleft.toString();
        var revleft = "";
        for (var j = numleftstr.length - 1; j >= 0; j--) {
          revleft += numleftstr[j];
        }
        var palindrome = numleftstr + revleft;
        return Number(palindrome);
      } else {
        var revleft = "";
        for (var i = left.length - 1; i >= 0; i--) {
          revleft += left[i];
        }
        var palindrome = left + revleft;
        return Number(palindrome);
      }
    } else {
      for (var i = 0; i < numstr.length; i++) {
        if (i === Math.floor(numstr.length / 2)) {
          middle = numstr[i];
        } else if (i < Math.floor(numstr.length / 2)) {
          left += numstr[i];
        } else {
          right += numstr[i];
        }
      }
      var midNum = Number(middle) + 1;
      var revleft = "";
      for (var i = left.length - 1; i >= 0; i--) {
        revleft += left[i];
      }
      var palindrome = left + midNum + revleft;
      return Number(palindrome);
    }
  }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
console.log(angkaPalindrome(2456)); // 2552
