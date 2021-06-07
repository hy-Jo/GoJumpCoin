var request = new XMLHttpRequest();


function key() {
  /*
   */

  var url = 'https://api.upbit.com/v1/market/all';


  request.open("GET", url, false);
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


function coinAddress() {

  var keyArray = key();
  var addressArray = new Array();
  for (i in keyArray) {
    console.log("index = " + i + " --- " + keyArray[i]);
    addressArray.push('https://api.upbit.com/v1/candles/minutes/1?market=' + keyArray[i] + '&count=1');

  }//주소 put

  return addressArray;
}

//주소 put
//var coinUrl = 'https://api.upbit.com/v1/candles/minutes/1?market='+coinName+'&count=1';


function timer(ms) {
  return new Promise(res => setTimeout(res, ms));
}

async function coinPrice() { // We need to wrap the loop into an async function for this to work

  var coinUrl = coinAddress();
  var coin_data = new Array();
  var index = 1;
  document.write('<tbody>');
  for (i in coinUrl) {

    request.open("GET", coinUrl[i], false);
    request.send();
    
    var obj = JSON.parse(request.responseText);

    //console.log(coinUrl[i]);
    console.log(obj);
    coin_data.push(obj);
    var coinName = coin_data[i][0].market;
    var coinPrice = coin_data[i][0].trade_price;
 
    document.write('<tr> <td>'+index+'</td><td>'+ coinName + '</td><td>' + coinPrice + '</td>'
        +        '<td> TBD </td><td> TBD</td><td> TBD </td></tr>');
    //console.log("coinName = " + coinName + "   coinPrice = " + coinPrice);
    index++;
    if (i % 10 == 0) {
     //await timer(1000);
    }
    
  }

  document.write('</tbody>');
    /*for (var i = 0; i < 3; i++) {
    console.log(i);
     // then the created Promise can be awaited
  }*/

  console.log(obj); 
}

coinPrice();