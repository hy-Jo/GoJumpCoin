<<<<<<< HEAD
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
=======
google.charts.load('current', { 'packages': ['treemap'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
	var data = google.visualization.arrayToDataTable([
		['Location', 'Parent', 'Market trade volume (size)', 'Market increase/decrease (color)'],
		['Coin', null, 0, 0],
		['BTC', 'Coin', 50, 12],
		['ETH', 'Coin', 100, 7],
/*		['LTC', null, 100, 10],
		['XRP', null, 100, 10],
		['OMG', null, 100, 10],
		['CVC', null, 100, 10],
		['DGB', null, 100, 10],
		['SC', null, 100, 10],
		['SNT', null, 100, 10],
		['WAVES', null, 100, 10],
		['NMR', null, 100, 10],
		['XEM', null, 100, 10],
		['LBC', null, 100, 10],
		['QTUM', null, 100, 10],
		['NXT', null, 100, 10],
		['BAT', null, 100, 10],
		['LSK', null, 100, 10],
		['RDD', null, 100, 10],
		['STEEM', null, 100, 10],
		['DOGE', null, 100, 10],
		['BNT', null, 100, 10],
		['XLM', null, 100, 10],
		['ARDR', null, 100, 10],
		['KMD', null, 100, 10],
		['ARK', null, 100, 10],
		['ADX', null, 100, 10],
		['SYS', null, 100, 10],
		['ANT', null, 100, 10],
		['STORJ', null, 100, 10],
		['GRS', null, 100, 10]
*/	]);
	var options = {
		width: '100%',
		height: '400',
		minColor: '#0652DD',
		minColorValue: '-50',
		midColor: '#FFF',
		maxColor: '#EA2027',
		maxColorValue: '50',
		headerHeight: 15,
		fontColor: 'black',
		showScale: true
	};
	tree = new google.visualization.TreeMap(document.getElementById('chart_div'));
	tree.draw(data, options);
	window.addEventListener('resize', drawChart, false);
}
>>>>>>> 49bd7a359d6796707772a074ec2cb84928fcff25
