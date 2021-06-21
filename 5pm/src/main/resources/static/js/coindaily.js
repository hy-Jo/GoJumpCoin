function coinDaily(){
  
  
  
  
  let map = new Map();
  
  var url =  window.location.protocol+"//"+window.location.host+'/api/trade';
  var request = new XMLHttpRequest();

  request.open("GET", url, false);
  request.send();

  var coinArray = JSON.parse(request.responseText);
  
  
  for (str in coinArray){
    
   console.log(coinArray[str]);
   map.set( coinArray[str].market , coinArray[str].trade_price);
  }

  console.log(" map 결과 == " + map.size);
  console.log(" map 결과 == " + map.get('KRW-BTC'));


}


coinDaily();