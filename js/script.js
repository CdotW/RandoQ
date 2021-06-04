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
  let q = quotes[rando].quote;
  let b = quotes[rando].source;
  let c = quotes[rando].citation;
  let y = quotes[rando].year;

  return [q, b, c, y] ;
}


/***
 * `printQuote` function
***/
function printQuote() {

  // grab random quotes and stuff
  let rnd = getRandomQuote();
  let q = rnd[0];
  let b = rnd[1];
  let c = rnd[2];
  let y = rnd[3];

  
  // string
  let string = 
  `<p class="quote">${q}</p>
   <p class="source">${b}`;
  // if statement to check if the citation property exists
  if (c) {
    string += `<span class="citation">${c}</span>`;
  }
  // if statement to check of the year property exists
  if (y) {
    string += `<span class="year">${y}</span>`;
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