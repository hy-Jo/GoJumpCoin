function dailyCoin(){
  
  
  
  
  var coinArray = new Array();
  
  var url =  'http://localhost:8000/api/get-trade';
  var request = new XMLHttpRequest();

  request.open("GET", url, false);
  request.send();

  var coinArray = JSON.parse(request.responseText);
  
  
  for (str in coinArray){
   console.log(coinArray[str]);
  }




}


dailyCoin();