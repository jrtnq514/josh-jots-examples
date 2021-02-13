const got = require('got');
const cheerio = require('cheerio');

const URL_TO_SCRAPE = 'https://reddit.com';

// Fetch the webpage
got(URL_TO_SCRAPE)
  .then(response => {
    // Load the page into cheerio for parsing
    const $ = cheerio.load(response.body);

    // Array to store the titles
    let titles = [];

    $('a h3').each((index, element) => {
      titles.push($(element).text());
    });

    console.log(titles);

  })
  .catch(error => {
    console.log(error);
  });
