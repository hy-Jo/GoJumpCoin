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
    //console.log("주소 : " + keyArray[i]);
    $.ajax({
      type: "GET",
      url: addressArray[i],
      dataType: "json",
      success: function(data) {
        var i = 0;
        var coinName = data[i].market;
        var name = coinName.split("-")[1];
        var symbol = coinName.split("-")[1] + "USD";
        var coinPrice = data[i].trade_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
        var str = "<tr id='" + symbol + "' style='cursor:pointer' align='right'"
          + "onclick='test(this.id);'> <td>" + index + "</td>"
          + "<td>" + name + "</td><td>" + coinPrice + "</td>"
          + "<td> TBD </td><td> TBD</td><td> TBD </td></tr>"

        //HTML cointable id에 작성
        $("#cointable").append(str);

        index++;

      },
      error: function(request, status, error) {
        i--;
        pageBegin--;
        pageEnd--;
        //boolean = true;
      }
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
  //console.log("스크롤 높이 : " + scrollHeight + " 현재 높이 : " + innerHeight + " 가장 위의 위치 :" + scrollTop );
  if (scrollbottom >= scrollHeight) {
    pageBegin = pageBegin + 10;
    pageEnd = pageEnd + 10;
    if (pageBegin <= addressArray.length) {
       if(pageBegin!=0)await timer(500);   
       coinprice();
    }
  }

});


coinprice();
