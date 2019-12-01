'use strict';

require('dotenv').config()

const API_KEY = 'wR2SrkxdWJbRoNQwOmUyAnypjZN2dvZwlJxbJT9RGDk03kf6JhPrmgPbAdLsP4wb'
const fs = require("fs");
const rp = require("request-promise");

async function callResult(token) {

  const options = {
    method: 'GET',
    uri: `https://api.tabscanner.com/api/result/${token}`,
    headers: {
      'apikey': API_KEY
    }
  };

  const result = await rp(options)
  return JSON.parse(result)

}
(async () => {
  try {

    // your token from the previous process call
    const token = 'yourtoken'

    let result = await callResult(token)
    console.log(result)


  } catch (e) {
    console.log(e)
  }
})();