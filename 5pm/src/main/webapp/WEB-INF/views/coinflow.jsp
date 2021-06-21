<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
	<!DOCTYPE html>
	<html lang="en">

	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<style type="text/css">
			@import url(https://fonts.googleapis.com/css?family=Roboto);

			#flow body {
				font-family: 'Roboto', sans-serif;
				/* overflow: hidden; */
			}

			#flow #superTable_wrapper {
				display: block;
			}

			#flow h2.title {
				width: 12em;
				text-align: center;
				margin: 0 auto;
				font-size: 2em;
				text-transform: uppercase;
			}

			#flow .subtitle {
				width: 30rem;
				margin: 0 auto;
				padding: 1rem;
			}

			#flow .button-group {
				width: 300px;
				margin: 0 auto;
			}

			#flow .button {
				text-transform: uppercase;
				font-family: 'Roboto', sans-serif;
			}

			#flow .button[data-mode="true"] {
				color: #fff;
				background-color: #282566;
				border-color: #204d74;
				border-style: inset;
			}

			#flow .floatingMenu {
				background-color: #3F3F3F;
				z-index: 100000;
				display: none;
				width: 5rem;
				position: absolute;
				top: 0;
				left: 0;

				a {
					color: white;
				}

				a[data-mode="false"],
				a[data-mode="false"]:hover {
					color: red;
				}

				a:hover {
					color: grey;
				}

			}

			#flow table.dataTable span.highlight {
				background-color: #FFFF88;
			}

			/* 차트2 */
			#flow .highcharts-figure,
			#flow .highcharts-data-table table {
				min-width: 310px;
				max-width: 800px;
				margin: 1em auto;
			}

			#flow #container {
				height: 400px;
			}

			#flow .highcharts-data-table table {
				font-family: Verdana, sans-serif;
				border-collapse: collapse;
				border: 1px solid #EBEBEB;
				margin: 10px auto;
				text-align: center;
				width: 100%;
				max-width: 500px;
			}

			#flow .highcharts-data-table caption {
				padding: 1em 0;
				font-size: 1.2em;
				color: #555;
			}

			#flow .highcharts-data-table th {
				font-weight: 600;
				padding: 0.5em;
			}

			#flow .highcharts-data-table td,
			#flow .highcharts-data-table th,
			#flow .highcharts-data-table caption {
				padding: 0.5em;
			}

			#flow .highcharts-data-table thead tr,
			#flow .highcharts-data-table tr:nth-child(even) {
				background: #f8f8f8;
			}

			#flow .highcharts-data-table tr:hover {
				background: #f1f7ff;
			}
		</style>
		<script defer src="https://code.highcharts.com/stock/highstock.js"></script>
		<script defer src="https://code.highcharts.com/stock/modules/exporting.js"></script>
		<script defer src="https://code.highcharts.com/stock/modules/accessibility.js"></script>
		<script defer src=/js/table.js></script>
		<script defer src=/js/coincycle.js></script>
		<!-- <script>
			$(document).ready(function () {
				$(".dataTables_scrollBody").css("height", "auto");
				$(".small-6").attr('class', 'col-sm-6');
			});
		</script> -->
	</head>

	<body>
		<div id="colorlib-page">
			<div id="colorlib-main">
				<section class="ftco-section ftco-bread">
					<div class="container">
						<div class="row no-gutters slider-text justify-content-center align-items-center">
							<div class="col-md-8 ftco-animate">
								<p class="breadcrumbs"><span class="mr-2"><a href="/">Home</a></span> <span>Coin 동향</span></p>
								<h1 class="bread">Coin 동향</h1>
							</div>
						</div>
					</div>
				</section>

				<section id="flow" class="ftco-section">
					<div class="container">
						<figure class="highcharts-figure">
							<div id="container"></div>
							<p class="highcharts-description">
								6개월동안 10% 이상 상승한 주기의 평균
							</p>
						</figure>
					</div>
					<div class="container">
						<h2 class="title">기간별 상승률</h2>
						<div class="button-group text-center">
							<a class="button table-type pagingTable">페이지로 보기</a>
							<a class="button table-type fullTable" data-mode="true">스크롤로 보기</a>
						</div>
						<div class="table">
							<table id="superTable" class="display" cellspacing="0" width="100%">
								<thead>
									<tr>
										<th>코인명/KRW 기준</th>
										<th>1주일</th>
										<th>1개월</th>
										<th>3개월</th>
										<th>6개월</th>
										<th>1년</th>
									</tr>
								</thead>
							</table>
						</div>
						<div class="floatingMenu">
							<ul class="menu vertical">
								<li><a data-mode="true" data-column="0">코인명/KRW 기준</a></li>
								<li><a data-mode="true" data-column="1">1주일</a></li>
								<li><a data-mode="true" data-column="2">1개월</a></li>
								<li><a data-mode="true" data-column="3">3개월</a></li>
								<li><a data-mode="true" data-column="4">6개월</a></li>
								<li><a data-mode="true" data-column="5">1년</a></li>
							</ul>
						</div>
					</div>
				</section>
			</div><!-- END COLORLIB-MAIN -->
		</div><!-- END COLORLIB-PAGE -->

		<!-- loader -->
		<div id="ftco-loader" class="show fullscreen">
			<svg class="circular" width="48px" height="48px">
				<circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee" />
				<circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10"
					stroke="#F96D00" />
			</svg>
		</div>
	</body>

	</html>