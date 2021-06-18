<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="https://code.highcharts.com/stock/highstock.js"></script>
<script src="https://code.highcharts.com/stock/modules/exporting.js"></script>
<script src="https://code.highcharts.com/stock/modules/accessibility.js"></script>

<style type="text/css">
@import url(https://fonts.googleapis.com/css?family=Roboto);
body {
  font-family: 'Roboto', sans-serif;
  overflow:hidden;
}
h2.title {
  width:12em;
  text-align: center;
  margin:0 auto;
  font-size:2em;
  text-transform:uppercase;
}
.subtitle {
  width:30rem;
  margin:0 auto;
  padding:1rem;

}
.button-group {
  width:300px;
  margin: 0 auto;
}
.button {
  text-transform:uppercase;
  font-family: 'Roboto', sans-serif;
}
.button[data-mode="true"] {
  color: #fff;
  background-color: #282566;
  border-color: #204d74;
  border-style: inset;
}

.floatingMenu {
  background-color: #3F3F3F;
  z-index:100000;
  display:none;
  width:5rem;
  position: absolute;
  top:0;
  left:0;
  a {
    color: white;
  }
  a[data-mode="false"], a[data-mode="false"]:hover {
    color: red;
  }
  a:hover{
    color: grey;
  }

}
table.dataTable span.highlight {
  background-color: #FFFF88;
}

/* 차트2 */
.highcharts-figure, .highcharts-data-table table {
    min-width: 310px; 
    max-width: 800px;
    margin: 1em auto;
}

#container {
    height: 400px;
}

.highcharts-data-table table {
  font-family: Verdana, sans-serif;
  border-collapse: collapse;
  border: 1px solid #EBEBEB;
  margin: 10px auto;
  text-align: center;
  width: 100%;
  max-width: 500px;
}
.highcharts-data-table caption {
    padding: 1em 0;
    font-size: 1.2em;
    color: #555;
}
.highcharts-data-table th {
  font-weight: 600;
    padding: 0.5em;
}
.highcharts-data-table td, .highcharts-data-table th, .highcharts-data-table caption {
    padding: 0.5em;
}
.highcharts-data-table thead tr, .highcharts-data-table tr:nth-child(even) {
    background: #f8f8f8;
}
.highcharts-data-table tr:hover {
    background: #f1f7ff;
}

</style>

</head>
<body>
 <div class="container-fluid text-center">
  <div class="row content">
    <div class="col-sm-2 sidenav">
    </div>
    <div class="col-sm-8 text-left"> 
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
    <figure class="highcharts-figure">
    <div id="container"></div>
    <p class="highcharts-description">
        6개월동안 10% 이상 상승한 주기의 평균
    </p>
  </figure>
</div>
</div>
</div>
</body>
  <script src=/js/table.js></script>
  <script src=/js/coincycle.js></script>

  </html>
