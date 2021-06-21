<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
	<!DOCTYPE html>
	<html lang="en">

	<head>
		<title>Louie - Free Bootstrap 4 Template by Colorlib</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<style>
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
		<script defer src=/js/coinkey.js></script>
		<script defer type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
		<script defer src=/js/coinchart.js></script>
		<script defer src=/js/coindaily.js></script>
	</head>

	<body>
		<div id="colorlib-page">
			<div id="colorlib-main">
				<section class="ftco-section ftco-bread">
					<div class="container">
						<div class="row no-gutters slider-text justify-content-center align-items-center">
							<div class="col-md-8 ftco-animate">
								<p class="breadcrumbs"><span class="mr-2"><a href="/">Home</a></span> <span>Coin 시세정보</span></p>
								<h1 class="bread">Coin 시세정보</h1>
							</div>
						</div>
					</div>
				</section>

				<section class="ftco-section">
					<div class="container">
						<div class="row d-flex">
							<div class="col-lg-8">
								<h2>실시간 시세표</h2>
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
										<tbody id="cointable"></tbody>
									</table>
								</div>
								<!-- 코인 table END-->
								<br>
							</div>
							<div class="col-lg-4 sidebar ftco-animate bg-light">
								<table class="table table-bordered table-dark">
									<thead>
										<tr>
											<th scope="col" colspan="4" align="right">금일의 코인</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="col">1</th>
											<td colspan="3">TBD</td>
										</tr>
										<tr>
											<th scope="col">2</th>
											<td colspan="3">TBD</td>
										</tr>
										<tr>
											<th scope="col">3</th>
											<td colspan="3">TBD</td>
										</tr>
									</tbody>
								</table>
							</div><!-- END COL -->
						</div>
					</div>
					<div class="container">
						<div class="row d-flex">
							<div class="col-lg-8">
								<h2>실시간 차트</h2>
								<!-- TradingView Widget BEGIN -->
								<div class="tradingview-widget-container">
									<div id="tradingview_cef4d"></div>
									<div class="chart"></div>
									<!-- coin chart BEGIN-->
									<!--coin chart END-->
								</div>
							</div>
							<div class="col-lg-4 sidebar ftco-animate bg-light">
							</div>
						</div>
					</div>
				</section>
			</div><!-- END COLORLIB-MAIN -->
		</div><!-- END COLORLIB-PAGE -->

		<!-- loader -->
		<div id="ftco-loader" class="show fullscreen"><svg class="circular" width="48px" height="48px">
				<circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee" />
				<circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10"
					stroke="#F96D00" />
			</svg></div>
	</body>

	</html>