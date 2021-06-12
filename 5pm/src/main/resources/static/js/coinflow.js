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
