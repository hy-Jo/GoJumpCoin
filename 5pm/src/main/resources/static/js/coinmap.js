/*
           
       request('GET','https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest?CMC_PRO_API_KEY=4adf43b1-a8f9-4cf4-89a1-c161c38ec59b')
       .then((r1) => {
           var x1 = JSON.parse(r1.target.responseText);
           console.log(x1.data.quote.USD.total_market_cap);
       }).catch(err => {
           console.log(err);
       })  
           
       function request(method, url) {
               return new Promise(function (resolve, reject) {
                   var xhr = new XMLHttpRequest();
                   xhr.open(method, url);
                   xhr.onload = resolve;
                   xhr.onerror = reject;
                   xhr.send();
               });
       }*/

function key() {
  /*
   */
  var request = new XMLHttpRequest();
  var url = 'https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest?CMC_PRO_API_KEY=4adf43b1-a8f9-4cf4-89a1-c161c38ec59b';
  //var url = 'https://api.upbit.com/v1/candles/minutes/1?market='+coinName+'&count=1';

  request.open("GET", url);

  request.send();

  var obj = JSON.parse(request.responseText);

  console.log(obj);
}

key();