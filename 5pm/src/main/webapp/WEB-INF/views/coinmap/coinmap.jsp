<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

<script>
$(document).ready(function(){
	$('li:nth-child(2)').addClass('active');
	$('li:nth-child(2)').css('background','black');
});
</script>
<script src="${pageContext.request.contextPath}/js/coinmap.js"></script>
</head>
<body>
<div class="container-fluid text-center">    
  <div class="row content">
    <div class="col-sm-2 sidenav">
    </div>
    <div class="col-sm-8 text-left"> 
      <p>코인맵페이지입니다</p>
<<<<<<< HEAD
       <script src="/js/coinmap.js"></script>
=======
      <div id="chart_div"></div>
>>>>>>> 49bd7a359d6796707772a074ec2cb84928fcff25
    </div>
    <div class="col-sm-2 sidenav">
      <div class="well">
        <p>채팅창</p>
      </div>gi
    </div>
  </div>
</div>
</body>
</html>