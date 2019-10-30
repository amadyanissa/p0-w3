function groupAnimals(animals) {
  // you can only write your code here!
  var group = [];

  for (var i = 0; i < animals.length; i++) {
    var sama = false;
    for (var j = 0; j < group.length; j++) {
      if (animals[i][0] === group[j][0][0]) {
        sama = true;
        group[j].push(animals[i]);
      }
    }
    if (sama === false) {
      group.push([animals[i]]);
    }
  }
  return group.sort();
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(
  groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"])
);
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
