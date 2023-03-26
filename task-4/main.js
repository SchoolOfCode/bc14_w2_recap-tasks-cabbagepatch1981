// BONUS TASKS 
// On your HTML page, you will see an input field and an 'Add To List' button. ✅ 
// Declare a new variable, `importantThings`, as an empty array. 🍏 
// Using JavaScript, configure the website so that when you write something in the input field and click the `Add To List` button, a new item is added to the `importantThings` array.
// As well as adding the item to the in-memory array, now display each added item in an `li` element within the ordered list.
// Add a new label and input field element to your `index.html` file. This input field represents the priority value of your important thing, and should take in a number. Refactor your code so that, when you click your `Add To List` button, you add an object to your array, rather than a string value. For example: `let importantThings = [{text: 'telephone mother', priority: 1}]`.
// Add a new button to your site called `Order List`. When the button is clicked, reorder your list by priority.



// Write in input field 🍏 
// addEventListener to button 🍏 
// store input field value in variable importantThings as an array
// display each added item in an li element within the ordered list
// Create li element within the ordered list

// Declare new variable importantThings as an empty array
let importantThings = [];

document.querySelector('#add-to-list').addEventListener('click', function() {
    console.log("Button clicked!");
    let userInput = document.querySelector('#important-thing');
    importantThings.push(userInput.value);

    // create a new li element
    const newListItem = document.createElement('li');

    // set the text of the li element to the user input value
    newListItem.textContent = userInput.value;

    // get a reference to the ordered list
    const orderedList = document.querySelector('ol');

    // append the new li element to the ordered list
    orderedList.appendChild(newListItem);
});
