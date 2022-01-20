const request = require('request');
const catAPI = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetchBreedDescription = function(breedName, callback) {
  const url = catAPI + breedName;
  request(url, (error, response, body) => {
    const data = JSON.parse(body);
    const description = data[0] === undefined ? undefined : data[0].description;
    callback(error, description);
  });
};

module.exports = {fetchBreedDescription};