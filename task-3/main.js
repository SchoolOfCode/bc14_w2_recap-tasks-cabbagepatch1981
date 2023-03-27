// PLAN
// Using `fetch`, get a random cat image URL using the API URL: https://api.thecatapi.com/v1/images/search 🍏 
// Once URL image retrieved, display the image on the page using the `img` element provided (with id of `cat-here`). 🍏 
// A different picture should be displayed every time you reload the page. 🍏 
// Using JavaScript, create a button element and add it to the page. Add an event listener to the button so that, when you click the button, a new image is displayed. 🍏 

// HINTS Task 3
/*Remember fetch returns you a promise. You always await a promise. To use await, you must be in an async function.

You can set the [src attribute](https://www.w3schools.com/jsref/met_win_clearinterval.asp) of the `img` just like you would set the `textContent` of a `p` element

You already have a function which grabs new images and updates the image shown on the page. Link this to the button through addEventListener */



// image API URL
const apiUrl = 'https://api.thecatapi.com/v1/images/search';
const catImgElement = document.getElementById('cat-here'); // get the cat image element from the DOM

// define async function to fetch a new cat image from the API
async function fetchCatImage() {
  const response = await fetch(apiUrl); // make a fetch request to the API URL
  const data = await response.json(); // parse the response data as JSON
  return data[0].url; // extract the image URL from the data and return it
}
// define async function to update the cat image on the page
async function updateCatImage() {
  const newCatImage = await fetchCatImage(); // fetch a new cat image from the API
  catImgElement.src = newCatImage; // set the src attribute of the image element to the new cat image URL
}

// create a new button element to trigger the updateCatImage function
const buttonElement = document.createElement('button');
buttonElement.textContent = 'Get Another Cat Image!'; // set the button text
buttonElement.addEventListener('click', updateCatImage); // add an event listener to the button that calls updateCatImage when the button is clicked

// add the button element to the page
document.body.appendChild(buttonElement);

// call the updateCatImage function once to display a cat image when the page loads
updateCatImage();
