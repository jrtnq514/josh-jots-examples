const got = require('got');
const cheerio = require('cheerio');

const URL_TO_SCRAPE = 'https://reddit.com';

(async () => {
  // Fetch the webpage
  const response = await got(URL_TO_SCRAPE);

  // Array to store the titles
  let titles = [];

  try {
    const $ = cheerio.load(response.body);

    $('a h3').each((index, element) => {
      titles.push($(element).text());
    });
  } catch (error) {
    console.log(error);
  }

  console.log(titles);
})();
