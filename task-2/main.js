// Task 2: Create a counter that counts up to 12 and then stops
    // Find the `p` tag (with an id of `count`) 🧩  
    // Count displays 0 when the page loads 🧩 
    // Using `setInterval` to increment count by 1 every second. 🧩 
    // Stop the interval from incrementing after 12 seconds using the [clearInterval] 🧩 

// Get the HTML element with an id of count and assign it to the variable counter
let counter = document.getElementById('count');
// Initialize the counterValue variable to 0
let counterValue = 0;
//Declare a variable interval to hold the interval ID returned by setInterval
let interval;

// Define the function countUp
function countUp() {
    // Increment the value of counterValue by 1
    counterValue += 1;
    // Update the textContent of the counter element with the new value of the counterValue variable
    counter.textContent = counterValue;
    // If the counterValue is greater than or equal to 12, stop the interval using the clearInterval function
    if (counterValue >= 12) {
        clearInterval(interval);
    }
}
// Set interval of one second between counts
interval = setInterval(countUp, 1000);
// call function
countUp(); 




