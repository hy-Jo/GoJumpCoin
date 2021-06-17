<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
	<!DOCTYPE html>
	<html lang="en">

	<head>
		<script>
			$(document).ready(function () {
				$('#button_all').click(function () {
					$('#chart_div_group').attr('style', 'display: none;');
					$('#chart_div_all').removeAttr('style');
				});
				$('#button_group').click(function () {
					$('#chart_div_all').attr('style', 'display: none;');
					$('#chart_div_group').removeAttr('style');
					//location.reload();
				});
			});
		</script>
		<script defer src="/js/coinmap_cl.js"></script>
		<script defer src="/js/coinmap.js"></script>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	</head>

	<body>
		<div id="colorlib-page">
			<div id="colorlib-main">
				<section class="ftco-section ftco-bread">
					<div class="container">
						<div class="row no-gutters slider-text justify-content-center align-items-center">
							<div class="col-md-8 ftco-animate">
								<p class="breadcrumbs"><span class="mr-2"><a href="index.html">Home</a></span> <span>Services</span></p>
								<h1 class="bread">CoinMap</h1>
								<div id="button_classification">
									<br>
									<p>
										<input type="button" id="button_all" value="ALL">
										<input type="button" id="button_group" value="GROUP">
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section class="ftco-section">
					<div class="container">
						<p>업데이트: <span id="chart_s"></span></p>
						<div id="chart_div_all"></div>
						<div id="chart_div_group" style="display: none;"></div>
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