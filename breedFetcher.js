const request = require("request");

const getBreedDesc = function (breed, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breed}`,
    (error, response, body) => {
      //convert JSON to Object
      const data = JSON.parse(body);
      if (error) {
        callback(`Request failed!`, null);
      } //If data (in the array) provided is invalid
      if (!data[0]) callback(undefined, undefined);
      else callback(undefined, data[0].description);
    }
  );
};

module.exports = getBreedDesc;
