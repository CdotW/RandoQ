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
  {quete: '1w', by: 'me1', citation: '', year:''},
  {quete: '2w', by: 'me2', citation: '', year: ''}, 
  {quete: '3w', by: 'me3', citation: '', year: ''},
  {quete: '4w', by: 'me4', citation: 'c4', year: '1986'},
  {quete: '5w', by: 'me5', citation: '', year: ''}
]


/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  const rando = Math.floor(Math.random() * quotes.length);
  let q = quotes[rando].quete;
  let b = quotes[rando].by;
  let c = quotes[rando].citation;
  let y = quotes[rando].year;

  return [q, b, c, y];
}


/***
 * `printQuote` function
***/
function printQuote() {
  let rnd = getRandomQuote();
  let q = rnd[0];
  let b = rnd[1];
  let c = rnd[2];
  let y = rnd[3];
  document.querySelector(".quote").innerHTML = `${q}`;
  document.querySelector(".source").innerHTML = `${b}`;
  document.querySelector(".source").insertAdjacentHTML('beforeend',` ${c}`);
  document.querySelector(".source").insertAdjacentHTML('beforeend',` ${y}`);
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);