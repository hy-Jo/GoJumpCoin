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
var nowBegin = 0;
var nowEnd = 10;

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
          + binanceTd + premiumTd + "</tr>"
        //console.log(str);
        //HTML cointable id에 작성
        if (document.getElementById(symbol) == null) {
          $("#cointable").append(str);
          //console.log("테이블 작성");
          index++;
       
        } else {
          //console.log("테이블 작성이 되어 있음");

   /*       if (Number(document.getElementById(symbol + 'binance').innerHTML) < Number(binancePrice)) {
            console.log(document.getElementById(symbol + 'binance').innerHTML + " <> " + binancePrice + " 상승 ");
            document.getElementById(symbol + 'binance').style.backgroundColor = "#4195F3";
          } else if (Number(document.getElementById(symbol + 'binance').innerHTML) > Number(binancePrice)) {
            console.log(document.getElementById(symbol + 'binance').innerHTML + " <> " + binancePrice + " 하락 ");
            document.getElementById(symbol + 'binance').style.backgroundColor = "#F36141";
          } else {
            //document.getElementById(symbol + 'binance').style.backgroundColor="white";
            console.log("else문");
          }*/

          document.getElementById(symbol + 'price').innerHTML = coinPrice;


          if (document.getElementById(symbol + 'binance') != null) {
            document.getElementById(symbol + 'binance').innerHTML = binancePrice;

            //document.getElementById(symbol + 'binance').style.backgroundColor="#F36141";
            document.getElementById(symbol + 'premium').innerHTML = premiumTd;
          }
          //setInterval("$('BTCUSD').fadeOut().fadeIn();", 1000);
          //$('#'+symbol).
          //document.getElementById(symbol).style.backgroundColor = "red";
          //console.log("가격 업데이트");
        }



      },
      error: function(request, status, error) {
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
  //console.log("휠 on");
  var scrollHeight = $(this).prop('scrollHeight');
  var scrollTop = $(this).scrollTop();
  var innerHeight = $(this).innerHeight();
  var scrollbottom = scrollTop + innerHeight;
  // tr height = 39.5
  //console.log("총 스크롤 높이 : " + scrollHeight + " 현재 높이 : " + 
  //innerHeight + " 가장 위의 위치 :" + scrollTop);
  //var allTrHeight = ((scrollHeight)/39.5);
  //allTrHeight = String(trHeight-1).split(".")[0]; // 총 tr 갯수

  var trHeight = ((scrollTop) / 39.5).toFixed(0);
  //console.log("이전 tr 번호 == " + trHeight);

  if (scrollbottom >= scrollHeight) {
    pageBegin = Number(trHeight) + 8
    pageEnd = Number(pageBegin) + 9;
    //console.log("맨 밑 pageBegin : " + pageBegin + "  /  pageEnd : " + pageEnd);
    if (pageBegin <= addressArray.length) {
      if (pageBegin != 0) await timer(500);
      await timer(1000);
      coinprice();

      //console.log(" pageBegin : " + pageBegin + "  /  pageEnd : " + pageEnd);
    }
  } else {
    nowBegin = trHeight;
    nowEnd = Number(trHeight) + 9;
    //console.log(" pageBegin : " + pageBegin + "  /  pageEnd : " + pageEnd);
  }
  pageBegin = nowBegin;
  pageEnd = nowEnd;

});

async function secondsPrice() {

  while (1) {
    coinprice();

    await timer(3000);
    //console.log("호출 " + pageBegin + " / " + pageEnd);
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