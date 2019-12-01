'use strict';
// load your environment containing the secret API key
require('dotenv').config()

// const API_KEY = process.env.API_KEY
const API_KEY = 'wR2SrkxdWJbRoNQwOmUyAnypjZN2dvZwlJxbJT9RGDk03kf6JhPrmgPbAdLsP4wb'
const fs = require("fs");
const rp = require("request-promise");

// async function callProcess(files, params, ) {

//   let formData = {
//     file: []
//   }

//   for (var i = 0; i < files.length; i++) {
//     const file = files[i]
//     formData.file.push({
//       value: fs.createReadStream(file),
//       options: {
//         filename: file,
//         contentType: 'image/png'
//       }
//     })
//   }

//   formData = Object.assign({}, formData, params);

//   const options = {
//     method: 'POST',
//     formData: formData,
//     uri: `https://api.tabscanner.com/api/2/process`,
//     headers: {
//       'apikey': API_KEY
//     }
//   };

//   const result = await rp(options)
//   return JSON.parse(result)
// }

// (async () => {
//   try {

//     const imageFile = './receiptImages/20191118_192801.png'
//     let result = await callProcess([imageFile], {})
//     // this token is used later to request the result
//     const token = result.token
//     console.log('My post token', token)

//   } catch (e) {
//     console.log(e)
//   }
// })();


// 'use strict';

// require('dotenv').config()

// const API_KEY = 'wR2SrkxdWJbRoNQwOmUyAnypjZN2dvZwlJxbJT9RGDk03kf6JhPrmgPbAdLsP4wb'
// const fs = require("fs");
// const rp = require("request-promise");

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
    const token = '5P1dQTaxBsB93LhE'

    let result = await callResult(token)
    console.log("testing my total", result.result.total)


  } catch (e) {
    console.log(e)
  }
})();