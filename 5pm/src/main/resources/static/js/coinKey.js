var exchange = 0;
var BTCUSDT = 0;



function key() {
  /*
   */

  var keyUrl = 'https://api.upbit.com/v1/market/all';
  var request = new XMLHttpRequest();

  request.open("GET", keyUrl, false);
  request.send();

  var obj = JSON.parse(request.responseText);
  var jsonArray = new Array();

  var i = 1;
  for (var ele in obj) {
    if (obj[ele].market.indexOf('KRW') == 0) {

      jsonArray.push(obj[ele].market);
      //console.log("index = " + i + "    T or F " + obj[ele].market.indexOf('KRW') + " key = " + ele + " / " + obj[ele].market + " / " + obj[ele].korean_name);
      i++;
    }
  }

  //console.log("function key ==> "+jsonArray);
  return jsonArray

  //console.log(obj);
}

var keyArray = key();
var addressArray = new Array();
for (i in keyArray) {
  //console.log("index = " + i + " --- " + keyArray[i]);
  addressArray.push('https://api.upbit.com/v1/candles/minutes/1?market=' + keyArray[i] + '&count=1');
}

function timer(ms) {
  return new Promise(res => setTimeout(res, ms));
}

//API 호출
var index = 1;
var pageBegin = 0;
var pageEnd = 10;


async function coinprice() {
  //var boolean = false;
  //console.log(addressArray.length);
  //console.log(" begin : " + pageBegin + " / end : " + pageEnd);


  for (i = pageBegin; i < pageEnd; i++) {
    //console.log("i : " + i);
    //console.log("주소 : " + keyArray[i]);
    $.ajax({
      type: "GET",
      url: addressArray[i],
      dataType: "json",
      success: function(data) {


        var coinName = data[0].market;
        var name = coinName.split("-")[1];
        var symbol = coinName.split("-")[1] + "USDT";
        var coinPrice = data[0].trade_price;

        var binancePrice = binance(symbol);

        if (binancePrice == null) {
          //console.log("값이 없어" + symbol);
          var editSymbol = coinName.split("-")[1] + "BTC";
          symbol = editSymbol;
          //console.log("수정된 symbol : " + editSymbol);
          binancePrice = binance(editSymbol);

          if (binancePrice == null) {
            //console.log(" USDT, BTC도 아님 ===> " + binancePrice);
          } else {
            binancePrice = binancePrice * BTCUSDT;
          }
        }


        //console.log("binancePrice == " + binancePrice);
        if (binancePrice != null) {

          var allbinance = (exchange * binancePrice).toFixed(2);//.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          var premium = (coinPrice - allbinance).toFixed(2);
          var premiumPercent = ((premium / allbinance) * 100).toFixed(2);

          var leftNum = binancePrice.toString().split(".")[0];
          var rightNum = binancePrice.toString().split(".")[1];
          //console.log(leftNum + "  <>   " + rightNum);
          if (leftNum.length > 3) {
            binancePrice = Number(binancePrice).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

          } else {
            binancePrice = Number(binancePrice).toFixed(4);
          }

          var binanceTd = "<td id='" + symbol + "binance'>" + binancePrice + "</td>";
          var premiumTd = "<td id='" + symbol + "premium'>" + premium.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            + "(" + premiumPercent + "%)</td>"
        } else {

          var binanceTd = "<td>   </td>";
          var premiumTd = "<td>   </td>"
        }
          var coinPrice = coinPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        /*console.log("premium = " + premium + "  coinPrice = " + coinPrice +
          "   exchange = " + exchange + "   binancePrice = " + binancePrice);
        console.log("name = " + name + "  symbol = " + symbol + "  coinPrice = " + coinPrice);


        console.log(" price ===== " + binancePrice);*/
        var str = "<tr id='" + symbol + "' style='cursor:pointer' align='right'"
          + "onclick='chart(this.id);'> <td>" + index + "</td>"
          + "<td>" + name + "</td><td id='" + symbol + "price' >" + coinPrice + "</td>"
          + binanceTd + "<td> TBD</td>" + premiumTd + "</tr>"
        //console.log(str);
        //HTML cointable id에 작성
        if (document.getElementById(symbol) == null) {
          $("#cointable").append(str);
          //console.log("테이블 작성");
          index++;
        } else {
           
          document.getElementById(symbol + 'price').innerHTML = coinPrice;
          
          if(document.getElementById(symbol + 'binance')!=null){
          document.getElementById(symbol + 'binance').innerHTML = binancePrice;
          document.getElementById(symbol + 'premium').innerHTML = premiumTd;
          }
          //setInterval("$('BTCUSD').fadeOut().fadeIn();", 1000);
          //$('#'+symbol).
          //document.getElementById(symbol).style.backgroundColor = "red";
          //console.log("가격 업데이트");
        }



      },
      error: function(request, status, error) {
        i--;
        pageBegin--;
        pageEnd--;
        //boolean = true;
      }
    }).always(function() {

      //console.log("요청완료 i : " + i);

    });




    /*    console.log("boolean :" + boolean);
        if (boolean) {
          
          $(".tableWrapper").animate({
    
            scrollTop: height,
          }, 500);
          break;
        }*/
  }

}

$(".tableWrapper").scroll(async function() {
  var scrollHeight = $(this).prop('scrollHeight');
  var scrollTop = $(this).scrollTop();
  var innerHeight = $(this).innerHeight();
  var scrollbottom = scrollTop + innerHeight;
  //console.log("스크롤 높이 : " + scrollHeight + " 현재 높이 : " + innerHeight + " 가장 위의 위치 :" + scrollTop);
  if (scrollbottom >= scrollHeight) {
    pageBegin = pageBegin + 10;
    pageEnd = pageEnd + 10;
    if (pageBegin <= addressArray.length) {
      if (pageBegin != 0) await timer(500);
      coinprice();

      console.log(" pageBegin : " + pageBegin + "  /  pageEnd : " + pageEnd);
    }
  }

});

async function secondsPrice() {

  while (1) {
  coinprice();

  await timer(1000);
  }
  
}





function binance(symbol) {

  var url = 'https://api.binance.com/api/v1/ticker/price?symbol=' + symbol;
  var request = new XMLHttpRequest();
  var binancePrice = null;
  try {
    request.open("GET", url, false);
    request.send(); 
    var binancePrice = JSON.parse(request.responseText).price;
    //console.log("binancePrice == " + binancePrice + "  symbol == " + symbol);

  } catch (e) {

    //console.log("에러남");
  }
  if (symbol == "BTCUSDT") {
    BTCUSDT = binancePrice;
    //console.log(BTCUSDT);
  }
  return binancePrice;
}

function USDKRW() {
  /*
   */

  var url = 'https://exchange.jaeheon.kr:23490/query/USDKRW';
  var request = new XMLHttpRequest();

  request.open("GET", url, false);
  request.send();

  var obj = JSON.parse(request.responseText).USDKRW[0];
  //console.log("USDKRW ==== " + obj);
  exchange = obj;
}



USDKRW();
secondsPrice();