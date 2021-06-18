<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
	<!DOCTYPE html>
	<html lang="en">

	<head>
		<title>GoCoin</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<script defer src="https://cdnjs.cloudflare.com/ajax/libs/sockjs-client/1.1.4/sockjs.min.js"></script>
		<script defer src="https://cdnjs.cloudflare.com/ajax/libs/stomp.js/2.3.3/stomp.min.js"></script>
		<script defer src="/js/chat.js"></script>
	</head>

	<body>
		<div id="colorlib-page">
			<a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle"><i></i></a>
			<aside id="colorlib-aside" role="complementary" class="js-fullheight text-center">
				<nav id="colorlib-main-menu" role="navigation">
					<ul>
						<li class="colorlib-active"><a href="/">Home</a></li>
						<li><a href="/coinchart">Coin 시세정보</a></li>
						<li><a href="/coinmap">Coin Map</a></li>
						<li><a href="contact.html">Coin 동향</a></li>
						<li><a href="contact.html">Contact</a></li>
					</ul>
				</nav>

				<div id="username-page" class="colorlib-footer">
					<div class="username-page-container">
						<h1 class="title">Enter your username</h1>
						<form id="usernameForm" name="usernameForm">
							<div class="form-group">
								<input type="text" id="name" placeholder="Username" autocomplete="off" class="form-control" />
							</div>
							<div class="form-group">
								<button type="submit" class="accent username-submit">Start Chatting</button>
							</div>
						</form>
					</div>
				</div>

				<div id="chat-page" class="hidden">
					<div class="chat-container">
						<div class="chat-header">
							<h2>Welcome to Spring Boot Chat Application</h2>
						</div>
						<div class="connecting">
							Connecting...
						</div>
						<ul id="messageArea">

						</ul>
						<form id="messageForm" name="messageForm">
							<div class="form-group">
								<div class="input-group clearfix">
									<input type="text" id="message" placeholder="Type a message..." autocomplete="off"
										class="form-control" />
									<button type="submit" class="primary">Send</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</aside>
			<!-- END COLORLIB-ASIDE -->
		</div>

	</body>

	</html>