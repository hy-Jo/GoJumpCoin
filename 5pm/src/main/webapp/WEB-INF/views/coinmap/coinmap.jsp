<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
  <!DOCTYPE html>
  <html>
  <script>
    $(document).ready(function () {
      $('li:nth-child(2)').addClass('active');
      $('li:nth-child(2)').css('background', 'black');
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
  <!-- namespace 중복 문제 해결 https://tangoo91.tistory.com/22  -->
  <script src="/js/coinmap_cl.js"></script>
  <script src="/js/coinmap.js"></script>
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
          <div id="chart_div_all"></div>
          <div id="chart_div_group" style="display: none;"></div>
        </div>
        <div class="col-sm-2 sidenav">
        <script src="/index.html">
          </script>
        </div>
  </body>

  </html>