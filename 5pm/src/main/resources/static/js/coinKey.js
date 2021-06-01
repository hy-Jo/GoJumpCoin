function key() {
  /*
   */
  var request = new XMLHttpRequest();
  var url = 'https://api.upbit.com/v1/market/all';
  //var url = 'https://api.upbit.com/v1/candles/minutes/1?market='+coinName+'&count=1';

  request.open("GET", url, false);
  request.send();

  var obj = JSON.parse(request.responseText);

  var i = 0;
  for (var ele in obj) {
    if (obj[ele].market.indexOf('KRW') == 0) {
      console.log("index = " + i + "    T or F " + obj[ele].market.indexOf('KRW') + " key = " + ele + " / " + obj[ele].market + " / " + obj[ele].korean_name);
      i++;
    }




  }
  /*console.log(obj);*/
}

key();
