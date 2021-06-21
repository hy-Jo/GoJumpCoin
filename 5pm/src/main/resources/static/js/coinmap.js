let clist_all = [
  [
    "Coin symbol",
    "Group",
    "Market trade volume (size)",
    "Market increase/decrease (color)",
  ],
  ["Coin", null, 0, 0],
];
let ltime_all = "";
clist_all.push();

//RestController
$(function () {
  $.ajax({
    url: "/api/coinmap/get",
    dataType: "json",
    success: function (result_all) {
      ltime_all = result_all[0].last_updated;
      //console.log(ltime_all);
      //console.log(result_all.status.total_count + ":" + result_all.status.timestamp);
      $.each(result_all, function (i, val) {
        let list_all = [];
        // console.log(typeof i);
        // console.log(
        //   val.symbol + "Coin" + val.market_cap + val.percent_change_24h
        // );
        list_all.push(val.symbol);
        list_all.push("Coin");
        list_all.push(val.market_cap);
        list_all.push(val.percent_change_24h);
        clist_all.push(list_all);
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
      ltime_all = result.status.timestamp;
      //console.log(result.status.total_count + ":" + result.status.timestamp);
      $.each(result.data_all, function (i, val) {
        let list = [];
        // console.log(typeof i);
        // console.log(
        //   val.symbol + "Coin" + val.market_cap + val.percent_change_24h
        // );
        list.push(val.symbol);
        list.push("Coin");
        list.push(val.quote.KRW.market_cap);
        list.push(val.quote.KRW.percent_change_24h);
        clist_all.push(list);
      });
    },
    error: function (jqXHR, textStatus, errorThrown) {
      alert("Error: " + textStatus + " errorThrown: " + errorThrown);
    },
  });
});
*/

google.charts.load("current", { packages: ["treemap"] });

function drawChart_all() {
  const data_all = google.visualization.arrayToDataTable(clist_all);

  const options_all = {
    width: "100%" * 5,
    height: 600,
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
    document.getElementById("chart_div_all")
  );
  tree.draw(data_all, options_all);

  document.getElementById("chart_s").innerText = ltime_all;

  function showStaticTooltip(row, size, value) {
    return "<div>" + data_all.getValue(row, 3) + "</div>";
  }
  // 차트 크기 유동적 변화
  window.addEventListener("resize", drawChart_all, false);
}
google.charts.setOnLoadCallback(drawChart_all);
