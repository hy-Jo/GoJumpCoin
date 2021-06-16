<<<<<<< HEAD
let coinData = null;

$.ajax({
	url: "/api/get_cycle/180",
	type: "get",
	dataType: "json",
	contentType: "application/json",
	success: function(data) {
		coinData = data;
	},
	error: function(jqXHR, textStatus, errorThrown) {
		alert("업로드 에러\ncode : " + jqXHR.status + "\nerror message : " + jqXHR.responseText);
	}
});

const input =
	[{ "market": "KRW-BTC", "inc_cycle": 36 }, { "market": "KRW-ETH", "inc_cycle": 36 }, { "market": "KRW-NEO", "inc_cycle": 10 }, { "market": "KRW-MTL", "inc_cycle": 8 }, { "market": "KRW-LTC", "inc_cycle": 12 }, { "market": "KRW-XRP", "inc_cycle": 9 }, { "market": "KRW-ETC", "inc_cycle": 10 }, { "market": "KRW-OMG", "inc_cycle": 9 }, { "market": "KRW-SNT", "inc_cycle": 9 }, { "market": "KRW-WAVES", "inc_cycle": 11 }, { "market": "KRW-XEM", "inc_cycle": 10 }, { "market": "KRW-QTUM", "inc_cycle": 9 }, { "market": "KRW-LSK", "inc_cycle": 9 }, { "market": "KRW-STEEM", "inc_cycle": 8 }, { "market": "KRW-XLM", "inc_cycle": 14 }, { "market": "KRW-ARDR", "inc_cycle": 9 }, { "market": "KRW-KMD", "inc_cycle": 11 }, { "market": "KRW-ARK", "inc_cycle": 10 }, { "market": "KRW-STORJ", "inc_cycle": 9 }, { "market": "KRW-GRS", "inc_cycle": 10 }, { "market": "KRW-REP", "inc_cycle": 14 }, { "market": "KRW-EMC2", "inc_cycle": 9 }, { "market": "KRW-ADA", "inc_cycle": 8 }, { "market": "KRW-SBD", "inc_cycle": 9 }, { "market": "KRW-POWR", "inc_cycle": 10 }, { "market": "KRW-BTG", "inc_cycle": 11 }, { "market": "KRW-ICX", "inc_cycle": 10 }, { "market": "KRW-EOS", "inc_cycle": 9 }, { "market": "KRW-TRX", "inc_cycle": 10 }, { "market": "KRW-SC", "inc_cycle": 7 }, { "market": "KRW-IGNIS", "inc_cycle": 8 }, { "market": "KRW-ONT", "inc_cycle": 8 }, { "market": "KRW-ZIL", "inc_cycle": 8 }, { "market": "KRW-POLY", "inc_cycle": 9 }, { "market": "KRW-ZRX", "inc_cycle": 9 }, { "market": "KRW-LOOM", "inc_cycle": 9 }, { "market": "KRW-BCH", "inc_cycle": 16 }, { "market": "KRW-ADX", "inc_cycle": 12 }, { "market": "KRW-BAT", "inc_cycle": 10 }, { "market": "KRW-IOST", "inc_cycle": 9 }, { "market": "KRW-DMT", "inc_cycle": 8 }, { "market": "KRW-RFR", "inc_cycle": 9 }, { "market": "KRW-CVC", "inc_cycle": 9 }, { "market": "KRW-IQ", "inc_cycle": 7 }, { "market": "KRW-IOTA", "inc_cycle": 8 }, { "market": "KRW-MFT", "inc_cycle": 7 }, { "market": "KRW-ONG", "inc_cycle": 9 }, { "market": "KRW-GAS", "inc_cycle": 10 }, { "market": "KRW-UPP", "inc_cycle": 9 }, { "market": "KRW-ELF", "inc_cycle": 16 }, { "market": "KRW-KNC", "inc_cycle": 11 }, { "market": "KRW-BSV", "inc_cycle": 14 }, { "market": "KRW-THETA", "inc_cycle": 7 }, { "market": "KRW-EDR", "inc_cycle": 8 }, { "market": "KRW-QKC", "inc_cycle": 9 }, { "market": "KRW-BTT", "inc_cycle": 8 }, { "market": "KRW-MOC", "inc_cycle": 7 }, { "market": "KRW-ENJ", "inc_cycle": 6 }, { "market": "KRW-TFUEL", "inc_cycle": 7 }, { "market": "KRW-MANA", "inc_cycle": 7 }, { "market": "KRW-ANKR", "inc_cycle": 8 }, { "market": "KRW-AERGO", "inc_cycle": 9 }, { "market": "KRW-ATOM", "inc_cycle": 8 }, { "market": "KRW-TT", "inc_cycle": 11 }, { "market": "KRW-CRE", "inc_cycle": 9 }, { "market": "KRW-SOLVE", "inc_cycle": 12 }, { "market": "KRW-MBL", "inc_cycle": 8 }, { "market": "KRW-TSHP", "inc_cycle": 8 }, { "market": "KRW-WAXP", "inc_cycle": 11 }, { "market": "KRW-HBAR", "inc_cycle": 8 }, { "market": "KRW-MED", "inc_cycle": 13 }, { "market": "KRW-MLK", "inc_cycle": 9 }, { "market": "KRW-STPT", "inc_cycle": 9 }, { "market": "KRW-ORBS", "inc_cycle": 11 }, { "market": "KRW-VET", "inc_cycle": 6 }, { "market": "KRW-CHZ", "inc_cycle": 7 }, { "market": "KRW-PXL", "inc_cycle": 9 }, { "market": "KRW-STMX", "inc_cycle": 10 }, { "market": "KRW-DKA", "inc_cycle": 12 }, { "market": "KRW-HIVE", "inc_cycle": 12 }, { "market": "KRW-KAVA", "inc_cycle": 9 }, { "market": "KRW-AHT", "inc_cycle": 9 }, { "market": "KRW-LINK", "inc_cycle": 8 }, { "market": "KRW-XTZ", "inc_cycle": 14 }, { "market": "KRW-BORA", "inc_cycle": 10 }, { "market": "KRW-JST", "inc_cycle": 11 }, { "market": "KRW-CRO", "inc_cycle": 18 }, { "market": "KRW-TON", "inc_cycle": 11 }, { "market": "KRW-SXP", "inc_cycle": 8 }, { "market": "KRW-LAMB", "inc_cycle": 8 }, { "market": "KRW-HUNT", "inc_cycle": 8 }, { "market": "KRW-MARO", "inc_cycle": 9 }, { "market": "KRW-PLA", "inc_cycle": 16 }, { "market": "KRW-DOT", "inc_cycle": 8 }, { "market": "KRW-SRM", "inc_cycle": 7 }, { "market": "KRW-MVL", "inc_cycle": 9 }, { "market": "KRW-PCI", "inc_cycle": 16 }, { "market": "KRW-STRAX", "inc_cycle": 10 }, { "market": "KRW-AQT", "inc_cycle": 11 }, { "market": "KRW-BCHA", "inc_cycle": 16 }, { "market": "KRW-GLM", "inc_cycle": 13 }, { "market": "KRW-QTCON", "inc_cycle": 8 }, { "market": "KRW-SSX", "inc_cycle": 9 }, { "market": "KRW-META", "inc_cycle": 8 }, { "market": "KRW-OBSR", "inc_cycle": 8 }, { "market": "KRW-FCT2", "inc_cycle": 8 }, { "market": "KRW-LBC", "inc_cycle": 10 }, { "market": "KRW-CBK", "inc_cycle": 11 }, { "market": "KRW-SAND", "inc_cycle": 9 }, { "market": "KRW-HUM", "inc_cycle": 9 }, { "market": "KRW-DOGE", "inc_cycle": 8 }, { "market": "KRW-STRK", "inc_cycle": 7 }, { "market": "KRW-PUNDIX", "inc_cycle": 8 }, { "market": "KRW-FLOW", "inc_cycle": 60 }, { "market": "KRW-DAWN", "inc_cycle": 26 }, { "market": "KRW-AXS", "inc_cycle": 26 }, { "market": "KRW-STX", "inc_cycle": 36 }]

let market_list = new Array();
let inc_cycle_list = new Array();
const hash = input.reduce((acc, o) => {
	//console.log(acc,o,o.market,o.inc_cycle);
	market_list.push(o.market);
	inc_cycle_list.push(o.inc_cycle);
	acc[o.market] ? acc[o.market].push(o.inc_cycle) : acc[o.market] = [o.inc_cycle]
	return acc
}, {})

console.log(market_list, inc_cycle_list);
const categories = Object.keys(hash)
const series = Object.values(hash).map((a) => ({ data: a }))

Highcharts.chart('container', {
	chart: {
		type: 'bar'
	},
	title: {
		text: '급등 주기 차트',
	},
	subtitle: {
		text: 'Source: 업비트 기준'
	},

	xAxis: {
		categories: market_list,
		//categories: categories,
		//['비트코인', '리플', '도지코인', '스트라이크', '밀크']
		max: 15,
		title: {
			text: null
		},
		scrollbar: {
			enabled: true
		}

	},
	yAxis: {
		min: 0,
		title: {
			text: '주기 (일)',
			align: 'high'
		},
		labels: {
			overflow: 'justify'
		}
	},
	tooltip: {
		valueSuffix: ' 일'
	},
	plotOptions: {
		bar: {
			dataLabels: {
				enabled: true
			}
		}
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'top',
		x: -40,
		y: 80,
		floating: true,
		borderWidth: 1,
		backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
		shadow: true
	},
	credits: {
		enabled: false
	},
	series: [{
		name: '급등 주기',
		data: inc_cycle_list
	}]
});

console.log(coinData);
=======
<<<<<<< HEAD:5pm/src/main/resources/static/js/coinflow.js
<<<<<<< HEAD
Highcharts.chart('container', {
  chart: {
    type: 'bar'
  },
  title: {
    text: '급등 주기 차트'
  },
  subtitle: {
    text: 'Source: 업비트 기준'
  },
  xAxis: {
    categories: ['비트코인', '리플', '도지코인', '스트라이크', '밀크'],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: '주기 (일)',
      align: 'high'
    },
    labels: {
      overflow: 'justify'
    }
  },
  tooltip: {
    valueSuffix: ' 일'
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true
      }
    }
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'top',
    x: -40,
    y: 80,
    floating: true,
    borderWidth: 1,
    backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
    shadow: true
  },
  credits: {
    enabled: false
  },
  series: [{
    name: '급등 주기',
    data: [107, 31, 635, 203, 2]
  }]
});
=======
Highcharts.chart('container', {
  chart: {
    type: 'bar'
  },
  title: {
    text: '급등 주기 차트'
  },
  subtitle: {
    text: 'Source: 업비트 기준'
  },
  xAxis: {
    categories: ['비트코인', '리플', '도지코인', '스트라이크', '밀크'],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: '주기 (일)',
      align: 'high'
    },
    labels: {
      overflow: 'justify'
    }
  },
  tooltip: {
    valueSuffix: ' 일'
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true
      }
    }
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'top',
    x: -40,
    y: 80,
    floating: true,
    borderWidth: 1,
    backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
    shadow: true
  },
  credits: {
    enabled: false
  },
  series: [{
    name: '급등 주기',
    data: [107, 31, 635, 203, 2]
  }]
});
>>>>>>> 6b40e0fc80692c261b82ba81431cc077b11010fc
=======
Highcharts.chart('container', {
  chart: {
    type: 'bar'
  },
  title: {
    text: '급등 주기 차트'
  },
  subtitle: {
    text: 'Source: 업비트 기준'
  },
	
  xAxis: {
    categories: ['비트코인', '리플', '도지코인', '스트라이크', '밀크'],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: '주기 (일)',
      align: 'high'
    },
    labels: {
      overflow: 'justify'
    }
  },
  tooltip: {
    valueSuffix: ' 일'
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true
      }
    }
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'top',
    x: -40,
    y: 80,
    floating: true,
    borderWidth: 1,
    backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
    shadow: true
  },
  credits: {
    enabled: false
  },
  series: [{
    name: '급등 주기',
    data: [107, 31, 635, 203, 2]
  }]
});
>>>>>>> f893597277f54a3510da4acb906244594980d470:5pm/src/main/resources/static/js/coincycle_save.js
>>>>>>> dc9040e04adb00ad6ba9fa6f5cce09cfe95bd6e4
