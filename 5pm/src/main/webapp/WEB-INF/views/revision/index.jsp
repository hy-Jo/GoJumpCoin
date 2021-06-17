<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script>
      $(document).ready(function () {
        $('li:nth-child(1)').addClass('active');
        $('li:nth-child(1)').css('background', 'black');
      });
    </script>
  </head>

  <body>

    <div class="container-fluid text-center">
      <div class="row content">
        <div class="col-sm-2 sidenav">
        </div>
        <div class="col-sm-8 text-left">
          <h1>Welcome</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.</p>
          <hr>
          <h3>Test</h3>
          <p>Lorem ipsum...</p>
        </div>
        <div class="col-sm-2 sidenav">
          <div class="well">
            <p>채팅창</p>
          </div>
        </div>
      </div>
    </div>


  </body>

  </html>