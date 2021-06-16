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

			#userListTable th {
				position: sticky;
				top: 0px;
				text-align: right;
				background-color: #f0f0f1 !important;
			}
		</style>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<script>
			$(document).ready(function () {
				$('li:nth-child(1)').addClass('active');
				$('li:nth-child(1)').css('background', 'black');
			});
		</script>
	</head>

	<body>
		<div class="container-fluid text-center">
			<div class="row content">
				<div class="col-sm-2 sidenav"></div>
				<div class="col-sm-8 text-left">
					<h1>실시간 시세표</h1>
					<!-- 코인 table BEGIN-->
					<div class="tableWrapper">
						<table class="table table-hover" id="userListTable">
							<thead>
								<tr>
									<th></th>
									<th>코인</th>
									<th>KRW(업비트)</th>
									<th>USD(바이낸스)</th>
									<th>거래량</th>
									<th>김치프리미엄</th>
								</tr>
							</thead>
							<tbody id="cointable">
								<script src=/js/coinkey.js></script>

							</tbody>
						</table>
					</div>

					<!-- 코인 table END-->
					<hr>
					<h2>실시간 차트</h2>

					<hr>
					<!-- TradingView Widget BEGIN -->
					<div class="tradingview-widget-container">
						<div id="tradingview_cef4d"></div>
						<script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
						<div class="chart"></div>
						<!-- coin chart BEGIN-->
						<script src=/js/coinchart.js></script>
						<!--coin chart END-->

					</div>
					<h2>

					</h2>
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