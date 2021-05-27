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
  {quete: '1w', by: 'me1'},
  {quete: '2w', by: 'me2'},
  {quete: '3w', by: 'me3'},
  {quete: '4w', by: 'me4'},
  {quete: '5w', by: 'me5'}
]


/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  const rando = Math.floor(Math.random() * quotes.length);
  let q = quotes[rando].quete;
  let b = quotes[rando].by;

  return [q, b];
}


/***
 * `printQuote` function
***/
function printQuote() {
  let rnd = getRandomQuote();
  let q = rnd[0];
  let b = rnd[1];
  document.querySelector(".quote").innerHTML = `${q}`;
  document.querySelector(".source").innerHTML = `${b}`;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);