/*
	var request = new XMLHttpRequest();
	//const fs = require('fs');
	var url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=4adf43b1-a8f9-4cf4-89a1-c161c38ec59b&convert=KRW';
	var test = 'https://sandbox-api.coinmarketcap.com/v2/cryptocurrency?CMC_PRO_API_KEY=b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c';
	
	request.open("GET", test, false);
	
	  request.send();
	
	  var obj = JSON.parse(request.responseText);
	
	  console.log(obj);*/

google.charts.load('current', { 'packages': ['treemap'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
	var data = google.visualization.arrayToDataTable([
		['Location', 'Parent', 'Market trade volume (size)', 'Market increase/decrease (color)'],
		['Global', null, 0, 0],
		['America', 'Global', 0, 0],
		['Europe', 'Global', 0, 0],
		['Asia', 'Global', 0, 0],
		['Australia', 'Global', 0, 0],
		['Africa', 'Global', 0, 0],
		['Brazil', 'America', 11, 10],
		['USA', 'America', 52, 31],
		['Mexico', 'America', 24, 12],
		['Canada', 'America', 16, -23],
		['France', 'Europe', 42, -11],
		['Germany', 'Europe', 31, -2],
		['Sweden', 'Europe', 22, -13],
		['Italy', 'Europe', 17, 4],
		['UK', 'Europe', 21, -5],
		['China', 'Asia', 36, 4],
		['Japan', 'Asia', 20, -12],
		['India', 'Asia', 40, 63],
		['Laos', 'Asia', 4, 34],
		['Mongolia', 'Asia', 1, -5],
		['Israel', 'Asia', 12, 24],
		['Iran', 'Asia', 18, 13],
		['Pakistan', 'Asia', 11, -52],
		['Egypt', 'Africa', 21, 0],
		['S. Africa', 'Africa', 30, 43],
		['Sudan', 'Africa', 12, 2],
		['Congo', 'Africa', 10, 12],
		['Zaire', 'Africa', 8, 10]
	]);
	var options = {
		width:'100%',
		height: '400',
		minColor: '#f00',
		midColor: '#ddd',
		maxColor: '#0d0',
		headerHeight: 15,
		fontColor: 'black',
		showScale: true
	};
	tree = new google.visualization.TreeMap(document.getElementById('chart_div'));
	tree.draw(data, options);
	window.addEventListener('resize', drawChart, false);
}

