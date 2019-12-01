var CloudmersiveOcrApiClient = require('cloudmersive-ocr-api-client');
var fs = require('fs');

var defaultClient = CloudmersiveOcrApiClient.ApiClient.instance;
 
// // Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = "9dd3610d-b3c0-4b66-9484-038f3989dabf"
 
var api = new CloudmersiveOcrApiClient.ImageOcrApi()
// var api = new CloudmersiveOcrApiClient.ReceiptsApi()
 
var imageFile = Buffer.from(fs.readFileSync("./receiptImages/spotify.png").buffer); // {File} Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.
 
var callback = async function (error, data, response) {
  // console.log('in callback: ',  data)
  // const result = await data;
  // console.log(result);

  // console.log("TESTING THE RESPONSE", response._header)
  if (error) {
    console.error(error);
  } else {
    // console.log('API called successfully. Returned data: ' + data.TextResult);
    console.log("splited array", data.TextResult.search(`\nTOTAL\n`));
    // console.log("STRING LENGHT", data.TextResult.length)
    // console.log("TOTAL VALUE", data.TextResult[568])
    // console.log("TOTAL VALUE", data.TextResult[569])
    // console.log("TOTAL VALUE", data.TextResult[57])
    // console.log("TOTAL VALUE", data.TextResult[571])
    // console.log("TOTAL VALUE", data.TextResult[572])
    // console.log("TOTAL VALUE", data.TextResult[573])
    // console.log("TOTAL VALUE", data.TextResult[574])
    // console.log("TOTAL VALUE", data.TextResult[575])
    // console.log("TOTAL VALUE", data.TextResult[576])
    // console.log("TOTAL VALUE", data.TextResult[577])
    // console.log("TOTAL VALUE", data.TextResult[578])
    // console.log("TOTAL VALUE", data.TextResult[579])
    // console.log("TOTAL VALUE", data.TextResult[580])
    // console.log("TOTAL VALUE", data.TextResult[581])
    // console.log("TOTAL VALUE", data.TextResult[580])
    // str.search("W3Schools");
  }
};
// // api.imageOcrPost(Buffer.from(pageBytes.buffer), callback);
api.imageOcrPost(imageFile, {}, callback);
// // console.log("TESTING", api.receiptsPhotoToCSV)
// api.receiptsPhotoToCSV(imageFile, callback);
