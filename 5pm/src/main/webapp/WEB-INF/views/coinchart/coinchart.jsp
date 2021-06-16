<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
	<!DOCTYPE html>
	<html lang="en">

	<head>
		<style type="text/css">
			.tableWrapper {
				height: 350px;
				overflow: auto;
				table-layout: fixed;
			}

			#userListTable {
				align: right;
				border: 0px;
				border-collapse: collapse;
			}

			<div class="container-fluid text-center"><div class="row content"><div class="col-sm-2 sidenav"><table class="table table-bordered table-dark"><thead><tr><th scope="col"colspan="4"align="right">금일의 코인</th></tr></thead><tbody><tr><th scope="col">1</th><td colspan="3">TBD</td></tr><tr><th scope="col">2</th><td colspan="3">TBD</td></tr><tr><th scope="col">3</th><td colspan="3">TBD</td></tr></tbody></table></div><div class="col-sm-8 text-left"><h1>실시간 시세표</h1><body><div class="container-fluid text-center"><div class="row content"><div class="col-sm-2 sidenav"></div><div class="col-sm-8 text-left"><h1>실시간 시세표</h1>< !-- 코인 table BEGIN--><div class="tableWrapper"><table class="table table-hover"id="userListTable"><thead><tr><th></th><th>코인</th><th>KRW(업비트)</th><th>USD(바이낸스)</th><th>거래량</th><th>김치프리미엄</th></tr></thead><tbody id="cointable"><script src=/js/coinkey.js></script></tbody></table></div>< !-- 코인 table END--><hr><h2>실시간 차트</h2><hr>< !-- TradingView Widget BEGIN --><div class="tradingview-widget-container"><div id="tradingview_cef4d"></div><script type="text/javascript"src="https://s3.tradingview.com/tv.js"></script><div class="chart"></div>< !-- coin chart BEGIN--><script src=/js/coinchart.js></script>< !--coin chart END--></div><h2></h2></div><div class="col-sm-2 sidenav"><div class="well"><p>채팅창</p></div></div></div></div></body></html>