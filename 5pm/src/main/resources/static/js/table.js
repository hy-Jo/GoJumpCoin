$(document).ready(function () {
  //Toggle Modes
  $("body").on("click", ".button", function () {
    var $selectedButton = $(this);
    $(".table-type").attr("data-mode", "false");
    $selectedButton.attr("data-mode", "true");
    //$(this).attr('data-mode', $(this).attr('data-mode') == 'true' ? 'false' : 'true'); //toggle not needed here
    if ($selectedButton.hasClass("pagingTable")) {
      showPagingTable();
    }
    if ($selectedButton.hasClass("fullTable")) {
      showFullTable();
    }
    //clear column selector
    $('.floatingMenu a[data-mode="false"]').trigger("click");
    $(".floatingMenu").hide();
  });

  $("body").on("contextmenu", "thead.contextMenu", function (e) {
    var menu = $(".floatingMenu");
    e.preventDefault();
    var posX = e.pageX,
      posY = e.pageY;
    menu.css("top", posY);
    menu.css("left", posX);
    menu.toggle();
  });

  $("body").on("click", ".floatingMenu a", function (e) {
    e.preventDefault();
    // Get the column API object
    var column = $("#superTable")
      .DataTable()
      .column($(this).attr("data-column"));
    $(this).attr(
      "data-mode",
      $(this).attr("data-mode") == "true" ? "false" : "true"
    );
    console.log(this);
    // Toggle the visibility
    column.visible(!column.visible());
    $(".floatingMenu").toggle();
  });

  function showPagingTable() {
    function clearDom() {
      var domToInject =
        '<table id="superTable" class="display" cellspacing="0" width="100%"><thead><tr><th>코인명/KRW 기준</th><th>1주일</th><th>1개월</th><th>3개월</th><th>6개월</th><th>1년</th></tr></thead></table>';
      $("#superTable").DataTable().destroy();
      $("#superTable").html(domToInject);
      buildTable();
    }

    function buildTable() {
      $("#superTable").DataTable({
        destroy: true,
        bDestroy: true,
        colReorder: true,
        responsive: true, //반응형
        paging: true, //페이징
        deferRender: true, //enable virtual scrolling
        fixedHeader: true,
        bInfo: false, //페이징 정보 표시
        info: false, //정보 표시
        bAutoWidth: true, //자동으로 컬럼폭 계산
        rowCallback: function (row, data) {
          //상승률이 +면 빨간색, -면 파란색
          if (data.week1 > 0) {
            $(row).find("td:eq(1)").css("color", "red");
          } else if (data.week1 < 0) {
            $(row).find("td:eq(1)").css("color", "blue");
          }
          if (data.month1 > 0) {
            $(row).find("td:eq(2)").css("color", "red");
          } else if (data.month1 < 0) {
            $(row).find("td:eq(2)").css("color", "blue");
          }
          if (data.month3 > 0) {
            $(row).find("td:eq(3)").css("color", "red");
          } else if (data.month3 < 0) {
            $(row).find("td:eq(3)").css("color", "blue");
          }
          if (data.month6 > 0) {
            $(row).find("td:eq(4)").css("color", "red");
          } else if (data.month6 < 0) {
            $(row).find("td:eq(4)").css("color", "blue");
          }
          if (data.year1 > 0) {
            $(row).find("td:eq(5)").css("color", "red");
          } else if (data.year1 < 0) {
            $(row).find("td:eq(5)").css("color", "blue");
          }
        },
        serverSide: false,
        processing: true,
        ajax: {
          url: "/coinflow/get-coinflow",
          type: "GET",
          //"dataType" : "JSON",
          dataSrc: "",
        },
        //"data": coinData,
        columns: [
          {
            data: "market",
          },
          {
            data: "week1",
            render: function (data, type, row) {
              if (type == "display") {
                if (data != 0) {
                  data = data + "%";
                } else {
                  data = "-"; //비상장
                }
              }
              return data;
            },
          },
          {
            data: "month1",
            render: function (data, type, row) {
              if (type == "display") {
                if (data != 0) {
                  data = data + "%";
                } else {
                  data = "-";
                }
              }
              return data;
            },
          },
          {
            data: "month3",
            render: function (data, type, row) {
              if (type == "display") {
                if (data != 0) {
                  data = data + "%";
                } else {
                  data = "-";
                }
              }
              return data;
            },
          },
          {
            data: "month6",
            render: function (data, type, row) {
              if (type == "display") {
                if (data != 0) {
                  data = data + "%";
                } else {
                  data = "-";
                }
              }
              return data;
            },
          },
          {
            data: "year1",
            render: function (data, type, row) {
              if (type == "display") {
                if (data != 0) {
                  data = data + "%";
                } else {
                  data = "-";
                }
              }
              return data;
            },
          },
        ],
      });
    }
    clearDom();
  }

  function showFullTable() {
    function clearDom() {
      var domToInject =
        '<table id="superTable" class="display" cellspacing="0" width="100%"><thead class="contextMenu"><tr><th>코인명/KRW 기준</th><th>1주일</th><th>1개월</th><th>3개월</th><th>6개월</th><th>1년</th></tr></thead></table>';
      $("#superTable").DataTable().destroy();
      $("#superTable").html(domToInject);
      buildTable();
    }

    function buildTable() {
      $("#superTable").DataTable({
        destroy: true,
        bDestroy: true,
        paging: true,
        colReorder: true,
        responsive: true, //반응형
        info: false, //정보 표시
        searchHighlight: true,
        deferRender: true, //enable virtual scrolling
        scrollY: "60vh",
        scroller: {
          loadingIndicator: true,
        },
        scrollX: true,
        bInfo: true, //hide paging info
        info: false, //hide information
        bAutoWidth: true, //자동으로 컬럼폭 계산
        rowCallback: function (row, data) {
          //상승률이 +면 빨간색, -면 파란색
          if (data.week1 > 0) {
            $(row).find("td:eq(1)").css("color", "red");
          } else if (data.week1 < 0) {
            $(row).find("td:eq(1)").css("color", "blue");
          }
          if (data.month1 > 0) {
            $(row).find("td:eq(2)").css("color", "red");
          } else if (data.month1 < 0) {
            $(row).find("td:eq(2)").css("color", "blue");
          }
          if (data.month3 > 0) {
            $(row).find("td:eq(3)").css("color", "red");
          } else if (data.month3 < 0) {
            $(row).find("td:eq(3)").css("color", "blue");
          }
          if (data.month6 > 0) {
            $(row).find("td:eq(4)").css("color", "red");
          } else if (data.month6 < 0) {
            $(row).find("td:eq(4)").css("color", "blue");
          }
          if (data.year1 > 0) {
            $(row).find("td:eq(5)").css("color", "red");
          } else if (data.year1 < 0) {
            $(row).find("td:eq(5)").css("color", "blue");
          }
        },
        serverSide: false,
        processing: true,
        ajax: {
          url: "/coinflow/get-coinflow",
          type: "GET",
          //"dataType" : "JSON",
          dataSrc: "",
        },
        columns: [
          {
            data: "market",
          },
          {
            data: "week1",
            render: function (data, type, row) {
              if (type == "display") {
                if (data != 0) {
                  data = data + "%";
                } else {
                  data = "-"; //비상장
                }
              }
              return data;
            },
          },
          {
            data: "month1",
            render: function (data, type, row) {
              if (type == "display") {
                if (data != 0) {
                  data = data + "%";
                } else {
                  data = "-";
                }
              }
              return data;
            },
          },
          {
            data: "month3",
            render: function (data, type, row) {
              if (type == "display") {
                if (data != 0) {
                  data = data + "%";
                } else {
                  data = "-";
                }
              }
              return data;
            },
          },
          {
            data: "month6",
            render: function (data, type, row) {
              if (type == "display") {
                if (data != 0) {
                  data = data + "%";
                } else {
                  data = "-";
                }
              }
              return data;
            },
          },
          {
            data: "year1",
            render: function (data, type, row) {
              if (type == "display") {
                if (data != 0) {
                  data = data + "%";
                } else {
                  data = "-";
                }
              }
              return data;
            },
          },
        ],
        dom: "Z<'row'<'small-6 columns'l><'small-6 columns'f>r>t<'row'<'small-6 columns'i><'small-6 columns'p>>",
        colResize: {
          rtl: false,
          resizeCallback: function (column) {
            console.log("Column Resized");
          },
        },
      });
    }

    clearDom();
  }
  showPagingTable();
});
