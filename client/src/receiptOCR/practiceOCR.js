// 'use strict';
// import axios from 'axios';
// // import fs from 'fs';
// // import rp from 'request-promise';
// const fs = require("fs");
// const rp = require("request-promise");
// // load your environment containing the secret API key
// require('dotenv').config()
// const API_KEY = 'wR2SrkxdWJbRoNQwOmUyAnypjZN2dvZwlJxbJT9RGDk03kf6JhPrmgPbAdLsP4wb'

// // const API_KEY = process.env.API_KEY

// export async function callProcess(files, params, ) {
//   console.log("INSIDE PRAC OCR", files)

//   let formData = {
//     file: []
//   }

//   for (var i = 0; i < files.length; i++) {
//     console.log("WHATFILE IS", files)
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

// // export async function callProcess(files, params, ) {
// //   console.log("INSIDE PRAC OCR", files)

// //   let formData = {
// //     file: []
// //   }

// //   for (var i = 0; i < files.length; i++) {
// //     const file = files[i]
// //     console.log("WHATFILE IS", files[i])
// //     formData.file.push({
// //       value: file.stream(),
// //       options: {
// //         contentType: 'image/png'
// //       }
// //     })
// //   }

// //   formData = Object.assign({}, formData, params);
// //   console.log(formData);
// //   const result = await axios({
// //     method: 'POST',
// //     url: `https://api.tabscanner.com/api/2/process`,
// //     data: formData,
// //     headers: {
// //       'apikey': API_KEY
// //     },
// //     type: 'json'
// //   })
// //   const options = {
// //     method: 'POST',
// //     formData: formData,
// //     uri: `https://api.tabscanner.com/api/2/process`,
// //     headers: {
// //       'apikey': API_KEY
// //     }
// //   };
// // try{
// //   // const result = await rp(options)
// //   console.log("TESTING THE RESULT ", result)

// //   return JSON.parse(result)

// // }catch(error){
// //   console.log("catching error", error);
// // }
// // }

// // The get part

// export async function callResult(token) {

//   const options = {
//     method: 'GET',
//     uri: `https://api.tabscanner.com/api/result/${token}`,
//     headers: {
//       'apikey': API_KEY
//     }
//   };
//   try{
//     const result = await rp(options)

//     // console.log("THE OPTOUNS", result)
//     return JSON.parse(result)
//   }catch (error) {
//     console.error(error);
//   }

// }


// // (async () => {
// //   try {

// //     const imageFile = './receiptImages/spotify.png'
// //     let postResult = await callProcess([imageFile], {})
// //     // this token is used later to request the result
// //     const token =  await postResult.token
// //     console.log('My post token', token)

// //     let getResult = await setTimeout(async() => {
// //       const temp = await callResult(token);
// //       console.log("TESTING TEMP", temp)
// //     }, 5000)  
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