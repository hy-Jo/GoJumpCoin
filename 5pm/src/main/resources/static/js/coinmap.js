let clist = [
  [
    "Coin symbol",
    "Group",
    "Market trade volume (size)",
    "Market increase/decrease (color)",
  ],
  ["Coin", null, 0, 0],
];
let ltime = "";
clist.push();

//RestController
$(function () {
  $.ajax({
    url: "/coinmap/get",
    dataType: "json",
    success: function (result) {
      ltime = result[0].last_updated;
      //console.log(ltime);
      //console.log(result.status.total_count + ":" + result.status.timestamp);
      $.each(result, function (i, val) {
        let list = [];
        // console.log(typeof i);
        // console.log(
        //   val.symbol + "Coin" + val.market_cap + val.percent_change_24h
        // );
        list.push(val.symbol);
        list.push("Coin");
        list.push(val.market_cap);
        list.push(val.percent_change_24h);
        clist.push(list);
      });
    },
    error: function (jqXHR, textStatus, errorThrown) {
      alert("Error: " + textStatus + " errorThrown: " + errorThrown);
    },
  });
});

//json file로부터 받아오기
/*
$(function () {
  $.ajax({
    url: "../assets/coinmap_REALdata.json",
    dataType: "json",
    success: function (result) {
      ltime = result.status.timestamp;
      //console.log(result.status.total_count + ":" + result.status.timestamp);
      $.each(result.data, function (i, val) {
        let list = [];
        // console.log(typeof i);
        // console.log(
        //   val.symbol + "Coin" + val.market_cap + val.percent_change_24h
        // );
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

  document.getElementById("chart_s").innerText = ltime;

  function showStaticTooltip(row, size, value) {
    return "<div>" + data.getValue(row, 3) + "</div>";
  }

  window.addEventListener("resize", drawChart, false);
}
google.charts.setOnLoadCallback(drawChart);
