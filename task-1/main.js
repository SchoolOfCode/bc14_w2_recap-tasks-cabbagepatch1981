const celebs = [
  "David Beckham",
  "Cher",
  "Madonna",
  "Tom Petty",
  "Cristiano Ronaldo",
  "Whoopi Goldberg",
  "Samuel L Jackson",
  "Angelina Jolie",
  "Richard Osman",
  "Emma Thompson"
];


// Task 1 Part 1 🍏 
// Write a function called `makeLegend`, which takes in a `name` (string) as its only argument. The function should return a new string which includes the name plus the words `' is now a legend.'`🍎  

function makeLegend(name) {
  return name + " is now a legend";
}

console.log(makeLegend);

//console.log(makeLegend("My dad"));

// Task 1 Part 2 🍏 
// Using the `makeLegend` function, the `celebs` array and a `for` loop, create a new array which includes `' is now a legend.'` for each celebrity. Save this new array to the variable `legendaryCelebs`.🍎 

const legendaryCelebs = [];

for(let i=0; i <celebs.length; i++) {
  legendaryCelebs.push(makeLegend(celebs[i]));
}

console.log(celebs);
console.log(legendaryCelebs);

// Task 1 Part 3
