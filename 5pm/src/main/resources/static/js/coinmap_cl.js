let clist = [
  [
    "Location",
    "Parent",
    "Market trade volume (size)",
    "Market increase/decrease (color)",
  ],
  ["Coin", null, 0, 0],
  ["Bitcoin", "Coin", 0, 0],
  ["Ethereum", "Coin", 0, 0],
  ["Ripple", "Coin", 0, 0],
  ["Platform", "Coin", 0, 0],
  ["Utility", "Coin", 0, 0],
  ["Payment", "Coin", 0, 0],
  ["Privacy", "Coin", 0, 0],
  ["Asset", "Coin", 0, 0],
  ["Game", "Coin", 0, 0],
  ["Contents", "Coin", 0, 0],
  ["Data", "Coin", 0, 0],
  ["IoT", "Coin", 0, 0],
  ["Distribute", "Coin", 0, 0],
  ["Exchange", "Coin", 0, 0],
  ["Unknown", "Coin", 0, 0],
];
clist.push();

//RestController
$(function () {
  $.ajax({
    url: "/coinmap/get",
    dataType: "json",
    success: function (result) {
      console.log(result);
      ltime = result[0].last_updated;
      //console.log(result.status.total_count + ":" + result.status.timestamp);
      $.each(result, function (i, val) {
        let list = [];
        // console.log(typeof i);
        // console.log(
        //   val.symbol + "Coin" + val.market_cap + val.percent_change_24h
        // );
        list.push(val.symbol);
        const sector = val.sector === null ? "Unknown" : val.sector;
        list.push(sector);
        console.log(sector);
        list.push(val.market_cap);
        list.push(val.percent_change_24h);
        clist.push(list);
      });
      console.log(clist);
    },
    error: function (jqXHR, textStatus, errorThrown) {
      alert("Error: " + textStatus + " errorThrown: " + errorThrown);
    },
  });
});

//json 파일에서 불러오기
/*
$(function () {
  $.ajax({
    url: "../assets/coinmap_REALdata.json",
    dataType: "json",
    success: function (result) {
      //console.log(result.status.total_count + ":" + result.status.timestamp);
      $.each(result.data, function (i, val) {
        let list = [];
        // console.log(typeof i);
        // console.log(
        //   val.symbol + "Coin" + val.market_cap + val.percent_change_24h
        // );
        list.push(val.symbol);
        //list.push("Coin");
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
*/

google.charts.load("current", { packages: ["treemap"] });

function drawChart() {
  const data = google.visualization.arrayToDataTable(clist);

  const options = {
    width: "100%",
    height: "400",
    minColor: "#0652DD",
    minColorValue: "-20",
    midColor: "#FFF",
    maxColor: "#EA2027",
    maxColorValue: "20",
    headerHeight: 15,
    fontColor: "black",
    showScale: true,
    useWeightedAverageForAggregation: true,
    generateTooltip: showStaticTooltip,
  };

  const tree = new google.visualization.TreeMap(
    document.getElementById("chart_div")
  );
  tree.draw(data, options);

  function showStaticTooltip(row, size, value) {
    return "<div>" + data.getValue(row, 3) + "</div>";
  }

  window.addEventListener("resize", drawChart, false);
}
google.charts.setOnLoadCallback(drawChart);
