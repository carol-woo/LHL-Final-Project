// 'use strict';
// // load your environment containing the secret API key
// require('dotenv').config()

// // const API_KEY = process.env.API_KEY
// const API_KEY = 'wR2SrkxdWJbRoNQwOmUyAnypjZN2dvZwlJxbJT9RGDk03kf6JhPrmgPbAdLsP4wb'
// // const fs = require("fs");
// import fs from 'fs';
// import rp from 'request-promise';
// // const rp = require("request-promise");

// export async function callProcess(files, params, ) {

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

// // The get part

// export async function callResult(token) {

//   const options = {
//     method: 'GET',
//     uri: `https://api.tabscanner.com/api/result/${token}`,
//     headers: {
//       'apikey': API_KEY
//     }
//   };
// console.log("THE OPTOUNS", options)
//   const result = await rp(options)
//   return JSON.parse(result)

// }


// // (async () => {
// //   try {

// //     const imageFile = './receiptImages/spotify.png'
// //     let postResult = await callProcess([imageFile], {})
// //     // this token is used later to request the result
// //     const token = postResult.token
// //     console.log('My post token', token)

// //     let getResult = await callResult(token)
// //     console.log("testing my total", getResult)

// //   } catch (e) {
// //     console.log(e)
// //   }
// // })();


// // 'use strict';

// // require('dotenv').config()

// // const API_KEY = 'wR2SrkxdWJbRoNQwOmUyAnypjZN2dvZwlJxbJT9RGDk03kf6JhPrmgPbAdLsP4wb'
// // const fs = require("fs");
// // const rp = require("request-promise");



// // get request function call
// // (async () => {
// //   try {

// //     // your token from the previous process call
// //     const token = 'v1D6w8VnwQLE7r2R'

// //     let result = await callResult(token)
// //     console.log("testing my total", result.result)


// //   } catch (e) {
// //     console.log(e)
// //   }
// // })();