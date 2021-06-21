var todayPrice = 0;
var yesterdayPrice = new Map();
var todayPercentArray = new Array();
var todayIndex = 1;

function coinDaily() {




  var url = window.location.protocol + "//" + window.location.host + '/api/trade';
  var request = new XMLHttpRequest();

  request.open("GET", url, false);
  request.send();

  var coinArray = JSON.parse(request.responseText);


  for (i in coinArray) {

    //console.log(coinArray[str]);

    yesterdayPrice.set(coinArray[i].market, coinArray[i].trade_price);
  }

  return yesterdayPrice;
}

async function coinDailyPrice() {
  /*console.log("yesterdayPrice.size ===> " + yesterdayPrice.size);
  console.log("coinSymbol.length ===> " + coinSymbol.length);
  */
  for (addressIdx; addressIdx < addressArray.length; addressIdx++) {

    /*console.log("symbol === > " + coinSymbol[i]);
    console.log("전날종가 === > " + yesterdayPrice.get(coinSymbol[i]));
    console.log("address === > " + addressArray[i]);
*/
    request.open("GET", addressArray[addressIdx], false);
    request.send();

    var coinPrice = JSON.parse(request.responseText);
    todayPrice = coinPrice[0].trade_price - yesterdayPrice.get(coinSymbol[addressIdx]);

    //console.log(coinPrice[0].trade_price + "<>" + yesterdayPrice.get(coinSymbol[addressIdx]));

    var todayPercent = (todayPrice / yesterdayPrice.get(coinSymbol[addressIdx])) * 100
    todayPercent = todayPercent.toFixed(2)
    //console.log("변동시세 ==> " + todayPrice + " ===> " + todayPercent);
    todayPercentArray.push([todayPercent, coinSymbol[addressIdx].split("-")[1]]);

    if (addressIdx % 10 == 0) {
      await timer(1000);
      percentList();

    }
    //console.log("index ====>>>> " + addressIdx);
  }

}

function percentList() {

  for (i in todayPercentArray) {
    todayPercentArray.sort(function(a, b) {
      return b[0] - a[0]
    })
  }
  for (j in todayPercentArray) {
    //console.log(todayPercentArray[j]);  
    if (todayPercentArray.length > 5) {
      //console.log(" j ===>>> " + j);
      //console.log(" todayIndex ===>>> " + todayIndex);
      
      if (j > 4) {
        todayIndex = 1;
        break;
      }
      var todaySymbol = todayPercentArray[j][1];
      var todayPercentage = todayPercentArray[j][0];
      var str = "<tr style='cursor:pointer'><th width='5%' scope='row'>" + todayIndex + "</th>" +
        "<td id='today"+todayIndex+"' onclick='chart(this.innerHTML)'" + todayIndex + "'>" + todaySymbol + "</td>" +
        "<td id='percent" + todayIndex + "'>" + todayPercentage + "%</td></tr>";
      if (document.getElementById("today" + todayIndex) == null) {
        $("#todayCoinRow").append(str);
      } else {
        document.getElementById("today" + todayIndex).innerHTML = todaySymbol;
        document.getElementById("percent"+todayIndex).innerHTML = todayPercentage;
        if(todayPercentage>0){
          document.getElementById("percent"+todayIndex).style.color="red";
        } else {
          document.getElementById("percent"+todayIndex).style.color="blue";
        }
      }
      todayIndex++;
    }
    
  }

  /*for (i = 0; i < 5; i++) {
    
    
   

    
   
  }
}*/
}

coinDaily();
coinDailyPrice();

