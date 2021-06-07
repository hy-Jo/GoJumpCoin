<%@ page language="java" contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
<style>
.tableWrapper {
  height: 350px;  
  overflow: auto;
  table-layout: fixed;
}

#userListTable {
  
  border: 0px;
  border-collapse: collapse;
}

#userListTable th {
  position: sticky;
  top: 0px;
  background-color: #f0f0f1 !important;
}
</style>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script>
$(document).ready(function(){
  $('li:nth-child(1)').addClass('active');
  $('li:nth-child(1)').css('background','black');
});
</script>
</head>
<body>

<div class="container-fluid text-center">    
  <div class="row content">
    <div class="col-sm-2 sidenav">
    </div>
    <div class="col-sm-8 text-left"> 
      <h1>실시간 시세 표</h1>
        <p>시세표(USD,KRW,거래량,김치프리미엄)</p>

        <!-- 코인 table BEGIN-->
        <div class="tableWrapper">
          <table class="table table-hover" id="userListTable">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">코인이름</th>
                <th scope="col">KRW</th>
                <th scope="col">USD</th>
                <th scope="col">거래량</th>
                <th scope="col">김치프리미엄</th>
              </tr>
            </thead>

            <!-- coin key API BEGIN -->
            <script src=/js/coinKey.js></script>
            <!-- coin key API END-->

          </table>
        </div>

        <!-- 코인 table END-->
      <hr>
      <h2>실시간 차트</h2>

        <hr>
        <!-- TradingView Widget BEGIN -->
        <div class="tradingview-widget-container">
          <div id="tradingview_cef4d"></div>
          <script type="text/javascript"
            src="https://s3.tradingview.com/tv.js"></script>
          <script type="text/javascript">
            var symbol = "BTCKRW";
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