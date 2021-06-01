function coinPrice(key) {

const url = 'https://api.upbit.com/v1/candles/minutes/1?market='+key+'&count=1';
const options = {method: 'GET', headers: {Accept: 'application/json'}};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));
}