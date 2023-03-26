// BONUS TASK 1
// On your HTML page, you will see an input field and an 'Add To List' button. ✅ 
// Declare a new variable, `importantThings`, as an empty array. 🍏 
// Using JavaScript, configure the website so that when you write something in the input field and click the `Add To List` button, a new item is added to the `importantThings` array. 🍏 
// As well as adding the item to the in-memory array, now display each added item in an `li` element within the ordered list. 🍏 
// Add a new label and input field element to your `index.html` file. This input field represents the priority value of your important thing, and should take in a number. 🍏 
// Refactor your code so that, when you click your `Add To List` button, you add an object to your array, rather than a string value. For example: `let importantThings = [{text: 'telephone mother', priority: 1}]`. 🍏 
// Add a new button to your site called `Order List`. 🍏 
// When the button is clicked, reorder your list by priority. 🍏 

// Declare new variable importantThings as an empty array
let importantThings = [];
const userInput = document.querySelector('#important-thing');
const addToListElement = document.querySelector('#add-to-list');
const rankingInput = document.querySelector('#ranking');
const orderedListButton = document.querySelector('#order-list');



// Get a reference to the unordered list  
const unorderedList = document.querySelector('#important-things-unordered');
// Get a reference to the ordered list
const orderedList = document.querySelector('#important-things-ordered');

// When user inputs data and clicks the 'Add to List' button, add a new item to the importantThings array
addToListElement.addEventListener('click', function() {
    console.log("Button clicked!");
    // let userInput = document.querySelector('#important-thing');
    // importantThings.push(userInput.value);
    
    const newItem = {
        text: userInput.value,
        priority: Number(rankingInput.value) // convert string to number
    }; 
    
    importantThings.push(newItem);
    
    console.log(importantThings, newItem);
    
    // Create a new li element
    const newListItem = document.createElement('li');
    
    // Set the text of the li element to the user input value
    newListItem.textContent = newItem.text;
    
    // Append the new li element to the ordered list
    unorderedList.appendChild(newListItem);
    // Clear the input field
    userInput.value = "";
    // auto focus the ranking input for a better user experience (after when button is clicked)
    rankingInput.focus();
});


orderedListButton.addEventListener('click', function() { 

    // Sort the importantThings array by priority
    // Use the sort method to sort the array
    // Use the compare function to sort the array by priority
    // a is the first element for comparison and b the second element
const sortedListByPriority = importantThings.sort(function(a, b) {
    return a.priority - b.priority;
});

for(let i=0; i < sortedListByPriority.length; i++) {
    const item = sortedListByPriority[i];
    const listItem = document.createElement('li');
    listItem.textContent = item.text;
    orderedList.appendChild(listItem);
}
// Index through the importantThings array
// Use a for loop to iterate through the array



// { text: 'telephone mother', priority: 1 }
});


window.addEventListener("load", function() {
    // auto focus the ranking input field at on load
    rankingInput.focus();
});


