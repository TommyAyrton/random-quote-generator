/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * Returns a random quote of an array of objects
 * `quotes` array 
***/
const quotes = [
  {
    quote: "The Black Mamba collection of watches is me: It is my alter ego, so to speak. As I mentioned before, it is sharp, cutting edge and sleek which are characteristics I try to apply when I'm out there on the basketball court.",
    source: "Kobe Bryant"
  },
  {
    quote: "Mistakes are painful when they happen, but years later a collection of mistakes is what is called experience.",
    source: "Denis Waitle",
    citation: "Internet",
    year: 1900
  },
  {
    quote: "The true university of these days is a collection of books.",
    source: "Thomas Carlyle",
    citation: "Web",
    year: 1900
  },
  {
    quote: "I love people. Everybody. I love them, I think, as a stamp collector loves his collection. Every story, every incident, every bit of conversation is raw material for me.",
    source: "Sylvia Plat",
    citation: "Web",
    year: 1900
  },
  {
    quote: "I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.'",
    source: "Muhammad Ali"
  },
  {
    quote: "Believe you can and you're halfway there.",
    source: "Theodore Roosevelt"
  },
  {
    quote: "In a gentle way, you can shake the world.",
    source: "Mahatma Gandhi",
    citation: "Internet",
    year: 1900
  },
  {
    quote: "What we think, we become.",
    source: "Buddha"
  },
  {
    quote: "Everyone here has the sense that right now is one of those moments when we are influencing the future.",
    source: "Steve Jobs"
  },
  {
    quote: "I love those who yearn for the impossible.",
    source: "Johann Wolfgang von Goethe"
  }
];

/***
 * `getRandomQuote` function
 * @param {Array} - The array of objects
***/
const getRandomQuote = (array) => {
  //Generate a random index between 0 and length of the array
  let indice = Math.floor(Math.random() * array.length);
  //Return an array object according to the index
  return array[indice];
}

/***
 * `printQuote` function
***/
const printQuote = () => {
  const object = getRandomQuote(quotes); 
  let i = '';
  //Condition if the object has citation and year
  if (object.hasOwnProperty("citation") && object.hasOwnProperty("year")) {
    i = `
    <span class = "citation">${object.citation}</span>
    <span class = "year">${object.year}</span>
    `;  
  }
  //Write the quote in the div quote-box
  return document.getElementById('quote-box').innerHTML = `
    <p class = "quote">${object.quote}</p>
    <p class = "source">${object.source}${i}</p>
  `;      
  }

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);