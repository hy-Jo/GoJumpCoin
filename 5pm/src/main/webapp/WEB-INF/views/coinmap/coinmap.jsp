<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
  <!DOCTYPE html>
  <html>
  <script>
    $(document).ready(function () {
      $('li:nth-child(2)').addClass('active');
      $('li:nth-child(2)').css('background', 'black');
      $('#button_all').click(function () {
        $('#scriptSrc').attr('src', '/js/coinmap.js');
      });
      $('#button_group').click(function () {
        $('#scriptSrc').attr('src', '/js/coinmap_cl.js');
        location.reload();
      });
    });
  </script>
  <script src="/js/coinmap.js" id="scriptSrc"></script>
  <style>
    .goog-tooltip {
      background: #fd9;
      padding: 5px;
      text-align: center;
      z-index: 1;
    }
  </style>
  </head>

  <body>
    <div class="container-fluid text-center">
      <div class="row content">
        <div class="col-sm-2 sidenav">
          <div id="button_classification">
            <p>
              <input type="button" id="button_all" value="ALL">
            </p>
            <p>
              <input type="button" id="button_group" value="GROUP">
            </p>
          </div>
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