/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/


const quotes = [
  {quote: '1w', source: 'me1'},
  {quote: '2w', source: 'me2', citation: '', year: ''}, 
  {quote: '3w', source: 'me3', citation: '', year: ''},
  {quote: '4w', source: 'me4', citation: 'c4', year: '1986'},
  {quote: '5w', source: 'me5', citation: '', year: ''}
]


/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  const rando = Math.floor(Math.random() * quotes.length);


  return quotes[rando];
}


/***
 * `printQuote` function
***/
function printQuote() {

  // grab random quotes and stuff
  let rnd = getRandomQuote();

  /**  dont get it if my code was able to produce the outcome in the html
   *  why i have to code it this way to pass?
   *  But here it is. */
  
  // string
  let string = 
  `<p class="quote">${rnd.quote}</p>
   <p class="source">${rnd.source}`;
  // if statement to check if the citation property exists
  if (rnd.citation) {
    string += `<span class="citation">${rnd.citation}</span>`;
  }
  // if statement to check of the year property exists
  if (rnd.year) {
    string += `<span class="year">${rnd.year}</span>`;
  }
  // closing </p>
  string += `</p>`;

  // printing string
  document.querySelector(".quote-box").innerHTML = `${string}`;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);