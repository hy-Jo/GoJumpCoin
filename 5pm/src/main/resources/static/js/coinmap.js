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