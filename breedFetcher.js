const request = require('request');
const args = process.argv.slice(2);

const breedName = args[0];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
request(url, (error, response, body) => {
  if (error) {
    console.log('Cannot get response from server. Error:', error);
    return;
  }

  const data = JSON.parse(body);
  console.log(data[0].description);
});

