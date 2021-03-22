/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

// array that holds at least 5 objects with quote + quote info
const quotes = [
  {
    quote:
      'Home is behind, the world ahead, and there are many paths to tread through shadows to the edge of night, until the stars are all alight.',
    source: 'J.R.R. Tolkien',
    citation: 'The Lord of the Rings',
    year: 1954,
    tag: 'Book',
  },
  {
    quote:
      'I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain.',
    source: 'Frank Herbert',
    citation: 'Dune',
    year: 1965,
    tag: 'Book',
  },
  {
    quote:
      'Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.',
    source: 'Michael Scott',
    citation: 'The Office',
    year: 2005,
    tag: 'TV',
  },
  {
    quote:
      "What you're supposed to do when you don't like a thing is change it. If you can't change it, change the way you think about it. Don't complain.",
    source: 'Maya Angelou',
    citation: "Wouldn't Take Nothing for My Journey Now",
    year: 1993,
    tag: 'Book',
  },
  {
    quote: 'Every man must die, Jon Snow. But first he must live.',
    source: 'Ygritte',
    citation: 'A Storm of Swords',
    year: 1993,
    tag: 'Book',
  },
  {
    quote: 'Luminous beings are we…not this crude matter.',
    source: 'Yoda',
    citation: 'The Empire Strikes Back',
    year: 1980,
    tag: 'Movie',
  },
  {
    quote: 'Why, you stuck-up, half-witted, scruffy-looking nerf herder!',
    source: 'Leia Organa',
    citation: 'The Empire Strikes Back',
    year: 1980,
    tag: 'Movie',
  },
];

/**
 * Generates a random number and returns a quote based on that number
 *
 * @param {arr} arr - Array of quotes
 * @returns {object} The random quote
 */

function getRandomQuote(arr) {
  const number = Math.floor(Math.random() * arr.length);
  const randomQuote = arr[number];
  return randomQuote;
}

/**
 * Generates random color
 *
 * @returns {string} Random color and updates body background color
 */

function updateColor() {
  const body = document.querySelector('body');
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

/**
 * Generates and prints out HTML string with random quote info
 *
 * @returns {string} Random quote + info
 */

function printQuote() {
  const quote = getRandomQuote(quotes);
  let html = `
    <p class="quote">${quote.quote}</p>
    <p class="source">${quote.source}
  `;

  if (quote.citation) {
    html += `
      <span class="citation">${quote.citation}</span>
    `;
  }

  if (quote.year) {
    html += `
    <span class="year">${quote.year}</span>
    `;
  }

  if (quote.tag) {
    html += `
    <span class="tag">${quote.tag}</span>
    `;
  }

  html += `</p>`;

  document.getElementById('quote-box').innerHTML = html;
  updateColor();
}

// generates a new quote every 10 seconds
window.setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById('load-quote')
  .addEventListener('click', printQuote, false);
