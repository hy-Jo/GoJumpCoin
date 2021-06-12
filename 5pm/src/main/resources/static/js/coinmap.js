let clist = [];
$(function () {
  $.ajax({
    url: "../assets/coinmap_REALdata.json",
    dataType: "json",
    success: function (result) {
      console.log(result.status.total_count + ":" + result.status.timestamp);
      $.each(result.data, function (i, val) {
        let list = [];
        console.log(typeof i);
        console.log(
          val.symbol + "Coin" + val.market_cap + val.percent_change_24h
        );
        list.push(val.symbol);
        list.push("Coin");
        list.push(val.quote.KRW.market_cap);
        list.push(val.quote.KRW.percent_change_24h);
        clist.push(list);
      });
    },
    error: function (jqXHR, textStatus, errorThrown) {
      alert("Error: " + textStatus + " errorThrown: " + errorThrown);
    },
  });
});

google.charts.load("current", { packages: ["treemap"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  const data = google.visualization.arrayToDataTable([
    [
      "Location",
      "Parent",
      "Market trade volume (size)",
      "Market increase/decrease (color)",
    ],
    ["Coin", null, 0, 0],
    clist.forEach(function (element) {
      console.log(element);
      element;
    }),
  ]);

  const options = {
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
