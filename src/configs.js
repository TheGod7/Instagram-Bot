const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  ACCESS_KEY: process.env.ACCESS_KEY, // the access key to the api for images: https://unsplash.com/
};
