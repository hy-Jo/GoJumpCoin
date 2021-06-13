<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
  <!DOCTYPE html>
  <html>
  <script defer>
    $(document).ready(function () {
      $('li:nth-child(2)').addClass('active');
      $('li:nth-child(2)').css('background', 'black');
    });
  </script>
  <style>
    .goog-tooltip {
      background: #fd9;
      padding: 5px;
      text-align: center;
      z-index: 1;
    }
  </style>
  <script defer src="/js/coinmap.js"></script>
  </head>

  <body>
    <div class="container-fluid text-center">
      <div class="row content">
        <div class="col-sm-2 sidenav">
        </div>
        <div class="col-sm-8 text-left">
          <p>업데이트: <span id="chart_s"></span></p>
          <div id="chart_div"></div>
        </div>
        <div class="col-sm-2 sidenav">
          <div class="well">
            <p>채팅창</p>
          </div>
        </div>
  </body>

  </html>