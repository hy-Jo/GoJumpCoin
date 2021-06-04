/*
           
       request('GET','https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest?CMC_PRO_API_KEY=4adf43b1-a8f9-4cf4-89a1-c161c38ec59b')
       .then((r1) => {
           var x1 = JSON.parse(r1.target.responseText);
           console.log(x1.data.quote.USD.total_market_cap);
       }).catch(err => {
           console.log(err);
       })  
           
       function request(method, url) {
               return new Promise(function (resolve, reject) {
                   var xhr = new XMLHttpRequest();
                   xhr.open(method, url);
                   xhr.onload = resolve;
                   xhr.onerror = reject;
                   xhr.send();
               });
       }*/


  /*
   */
	var request = new XMLHttpRequest();
	//const fs = require('fs');
	var url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=4adf43b1-a8f9-4cf4-89a1-c161c38ec59b&convert=KRW';
	var test = 'https://sandbox-api.coinmarketcap.com/v2/cryptocurrency?CMC_PRO_API_KEY=b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c';
	
	request.open("GET", test, false);
	
	  request.send();
	
	  var obj = JSON.parse(request.responseText);
	
	  console.log(obj);
	
/*	fs.writeFile('student-3.json', obj, (err) => {
	    if (err) throw err;
	    console.log('Data written to file');
});
*/


/*"use strict";

let url = "https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest?CMC_PRO_API_KEY=4adf43b1-a8f9-4cf4-89a1-c161c38ec59b&convert=KRW";

fetch(url)
.then(function(resp){
	return resp.json();
})
.then(function(data){
	console.log(data);
})*/