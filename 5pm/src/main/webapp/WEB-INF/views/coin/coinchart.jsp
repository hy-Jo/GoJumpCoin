<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  <style>
      /* Remove the navbar's default margin-bottom and rounded borders */ 
    .navbar {
      margin-bottom: 0;
	  border-radius: 0;
      background-color: #F20C34;
      border-color: #FFFFFF;
      active
    }
 
    /* Set height of the grid so .sidenav can be 100% (adjust as needed) */
    .row.content {height: 450px}
    
    /* Set gray background color and 100% height */
    .sidenav {
      padding-top: 20px;
      background-color: #f1f1f1;
      height: 100%;
    }

    /* On small screens, set height to 'auto' for sidenav and grid */
    @media screen and (max-width: 767px) {
      .sidenav {
        height: auto;
        padding: 15px;
      }
      .row.content {height:auto;} 
    }
  </style>
</head>
<body>

<div class="container-fluid text-center">    
  <div class="row content">
    <div class="col-sm-2 sidenav">
    </div>
    <div class="col-sm-8 text-left"> 
      <h1>실시간 시세 표</h1>
      <p>시세표(USD,KRW,거래량,김치프리미엄)</p>
      <br>
      <h2>실시간 차트</h2>
      <!-- coin key API BEGIN -->
      <script src="/js/coinKey.js"></script>
      <!-- coin key API END-->
      <hr>
				<!-- TradingView Widget BEGIN -->
				<div class="tradingview-widget-container">
					<div id="tradingview_cef4d"></div>
					<script type="text/javascript"
						src="https://s3.tradingview.com/tv.js"></script>
					<script type="text/javascript">
					var symbol="BTCKRW";
					//alert(symbol);
						new TradingView.widget({
							"width" : screen.width.half,
							"height" : screen.height.half,
							"symbol" : symbol,
							"interval" : "1",
							"timezone" : "Etc/UTC",
							"theme" : "dark",
							"style" : "1",
							"locale" : "kr",
							"toolbar_bg" : "#f1f3f6",
							"enable_publishing" : false,
							"hide_side_toolbar" : false,
							"container_id" : "tradingview_cef4d"
						});
						//console.log(TradingView.symbol);
					</script>
				</div>
				<!-- TradingView Widget END -->
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