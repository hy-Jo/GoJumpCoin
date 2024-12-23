function chart(id){
  var symbol=id;
    
  $(".chart").append( new TradingView.widget({
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
      })
  );
}
chart("BTCUSD");