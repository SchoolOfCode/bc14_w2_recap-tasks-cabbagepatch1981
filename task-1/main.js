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


// Task 1 Part 1 🍏 and Bonus Task 2
// Write a function called `makeLegend`, which takes in a `name` (string) as its only argument. The function should return a new string which includes the name plus the words `' is now a legend.'`🍎  
// // Bonus Task 2
//  For the `makeLegend` function from Task 1, **refactor** it to check that you were handed a string - if you weren't, then return `'A legend requires a string'` instead. 🍎 

function makeLegend(name) {
  if (typeof name !== 'string') {
    return 'A legend requires a string'; 
  } 
  return `${name} is now a legend`;
}

console.log(makeLegend("My dad"));
// return `${name} is now a legend`;


// Task 1 Part 2 🍏 
// Using the `makeLegend` function, the `celebs` array and a `for` loop, create a new array which includes `' is now a legend.'` for each celebrity. Save this new array to the variable `legendaryCelebs`.🍎 

const legendaryCelebs = [];

for(let i=0; i < celebs.length; i++) {
  legendaryCelebs.push(makeLegend(celebs[i]));
}

console.log(celebs);
console.log(legendaryCelebs);

// Task 1 Part 3🍏 
// Use another for loop to produce a new array of all of the celebrity names which start with a vowel, and store that new array in a new variable called `vowelCelebs`.

// Declare variable vowelCelebs
const vowelCelebs = [];
// For loop to find first letter in the array
for(let i = 0; i < celebs.length; i++) {
  let firstLetter = celebs[i][0];
// If statement to check if the first letter is a vowel
// If first letter = A E I O U then assign to vowelCelebs else ignore
  if (firstLetter === "A" || firstLetter === "E" || firstLetter === "I" || firstLetter === "O" || firstLetter === "U") {
// Then add this new list of celebs with vowel as start of name to the variable vowelCelebs   
    vowelCelebs.push(celebs[i]);
  }
} 

console.log(vowelCelebs);




