let clist_group = [
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
clist_group.push();
let ltime_group = "";

//RestController
$(function () {
  $.ajax({
    url: "/coinmap/get",
    dataType: "json",
    success: function (result_group) {
      console.log(result_group);
      ltime_group = result_group[0].last_updated;
      //console.log(result_group.status.total_count + ":" + result_group.status.timestamp);
      $.each(result_group, function (i, val) {
        let list_group = [];
        // console.log(typeof i);
        // console.log(
        //   val.symbol + "Coin" + val.market_cap + val.percent_change_24h
        // );
        list_group.push(val.symbol);
        const sector = val.sector === null ? "Unknown" : val.sector;
        list_group.push(sector);
        console.log(sector);
        list_group.push(val.market_cap);
        list_group.push(val.percent_change_24h);
        clist_group.push(list_group);
      });
      console.log(clist_group);
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
        clist_group.push(list);
      });
    },
    error: function (jqXHR, textStatus, errorThrown) {
      alert("Error: " + textStatus + " errorThrown: " + errorThrown);
    },
  });
});
*/
google.charts.load("current", { packages: ["treemap"] });

function drawChart_group() {
  const data = google.visualization.arrayToDataTable(clist_group);

  const options = {
    width: "100%",
    height: "100%",
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
    document.getElementById("chart_div_group")
  );
  tree.draw(data, options);

  document.getElementById("chart_s").innerText = ltime_group;

  function showStaticTooltip(row, size, value) {
    return "<div>" + data.getValue(row, 3) + "</div>";
  }
  window.addEventListener("resize", drawChart_group, false);
}

google.charts.setOnLoadCallback(drawChart_group);
