let url =
  "https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest?CMC_PRO_API_KEY=4adf43b1-a8f9-4cf4-89a1-c161c38ec59b&convert=KRW";
const test =
  "https://sandbox-api.coinmarketcap.com/v2/cryptocurrency?CMC_PRO_API_KEY=b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c";

fetch(test)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
  });

google.charts.load("current", { packages: ["treemap"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    [
      "Location",
      "Parent",
      "Market trade volume (size)",
      "Market increase/decrease (color)",
    ],
    ["Coin", null, 0, 0],
    ["BTC", "Coin", 50, 12],
    ["ETH", "Coin", 100, 7],
    ["LCT", "Coin", 100, 7],
  ]);

  var options = {
    width: "100%",
    height: "400",
    minColor: "#0652DD",
    minColorValue: "-50",
    midColor: "#FFF",
    maxColor: "#EA2027",
    maxColorValue: "50",
    headerHeight: 15,
    fontColor: "black",
    showScale: true,
  };

  tree = new google.visualization.TreeMap(document.getElementById("chart_div"));
  tree.draw(data, options);
  window.addEventListener("resize", drawChart, false);
}
