<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

<script>
$(document).ready(function(){
	$('li:nth-child(2)').addClass('active');
	$('li:nth-child(2)').css('background','black');
});
</script>
</head>
<body>
<div class="container-fluid text-center">    
  <div class="row content">
    <div class="col-sm-2 sidenav">
    </div>
    <div class="col-sm-8 text-left"> 
      <p>코인맵페이지입니다</p>
       <script >
       			
      		 var apikey = {
    		    key:'4adf43b1-a8f9-4cf4-89a1-c161c38ec59b'
    		}
    		    
    		request('GET','https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest?CMC_PRO_API_KEY=' + apikey.key)
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
    		}
       </script>
    </div>
    <div class="col-sm-2 sidenav">
      <div class="well">
        <p>채팅창</p>
      </div>
    </div>
  </div>
</div>
</body>
</html>