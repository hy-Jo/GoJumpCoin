<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>
<title>GoCoin</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<link rel="stylesheet" href="/css/chat.css" />
</head>
<body>
	
		<aside id="colorlib-aside" role="complementary"
			class="js-fullheight text-center">
			
			
			
			<nav id="colorlib-main-menu" role="navigation">
				<ul>
					<li class="colorlib-active"><a href="/home">Home</a></li>
					<li><a href="coinchart">Coin시세정보</a></li>
					<li><a href="coinmap">CoinMap</a></li>
					<li><a href="coinflow">Coin동향</a></li>
					<li><a href="contact.html">Contact</a></li>
				</ul>
			</nav>

		<div id="username-page">
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
                <h1>GoJump Live Chat</h1>
            </div>
            <div class="connecting">
                Connecting...
            </div>
            <ul id="messageArea">

            </ul>
            <form id="messageForm" name="messageForm">
                <div class="form-group">
                    <div class="input-group clearfix">
                        <input type="text" class="form-control" id="message" placeholder="Type a message..." autocomplete="off" />
                        <button type="submit" class="primary">></button>
                    </div>
                    
                </div>
            </form>
        </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/sockjs-client/1.1.4/sockjs.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/stomp.js/2.3.3/stomp.min.js"></script>
    <script src="/js/chat.js"></script>
		</aside>
		<!-- END COLORLIB-ASIDE -->

</body>

</html>