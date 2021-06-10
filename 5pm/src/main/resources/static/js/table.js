
var testData = null;
var smallTable = [

    {
      "name": "Michael Bruce",
      "hr": {
        "position": "Javascript Developer",
        "salary": "$183,000",
        "start_date": "2011/06/27"
      },
      "contact": [
        "Singapore",
        "5384"
      ]
    },
    {
      "name": "Donna Snider",
      "hr": {
        "position": "Customer Support",
        "salary": "$112,000",
        "start_date": "2011/01/25"
      },
      "contact": [
        "New York",
        "4226"
      ]
    }
  ]

/*$.ajax({
        url: "/coinflow/get",
        type: "get",
        dataType: "json",
        contentType: "application/json",
        success: function(data) {
            testData = data;
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // 에러 로그는 아래처럼 확인해볼 수 있다. 
            alert("업로드 에러\ncode : " + jqXHR.status + "\nerror message : " + jqXHR.responseText);
        }
});*/



$(document).ready(function() {

  //Toggle Modes
  $('body').on('click', '.button', function() {
    var $selectedButton = $(this);
    $('.table-type').attr('data-mode', 'false');
    $selectedButton.attr('data-mode', 'true');
    //$(this).attr('data-mode', $(this).attr('data-mode') == 'true' ? 'false' : 'true'); //toggle not needed here
    if ($selectedButton.hasClass('pagingTable')) {
      showPagingTable();
    }
    if ($selectedButton.hasClass('bigTable')) {
      showBigTable();
    }
    if ($selectedButton.hasClass('fullTable')) {
      showFullTable();
    }
    //clear column selector
    $('.floatingMenu a[data-mode="false"]').trigger('click');
    $('.floatingMenu').hide();
  });

  $('body').on('contextmenu', 'thead.contextMenu', function(e) {
    var menu = $('.floatingMenu');
    e.preventDefault();
    var posX = e.pageX,
      posY = e.pageY;
    menu.css('top', posY);
    menu.css('left', posX);
    menu.toggle();
  });

  $('body').on('click', '.floatingMenu a', function(e) {
    e.preventDefault();
    // Get the column API object
    var column = $('#superTable').DataTable().column($(this).attr('data-column'));
    $(this).attr('data-mode', $(this).attr('data-mode') == 'true' ? 'false' : 'true');
    console.log(this);
    // Toggle the visibility
    column.visible(!column.visible());
    $('.floatingMenu').toggle();
  });

  function showPagingTable() {
    function clearDom() {
      var domToInject = '<table id="superTable" class="display" cellspacing="0" width="100%"><thead><tr><th>코인명/KRW 기준</th><th>1주일</th><th>1개월</th><th>3개월</th><th>6개월</th><th>1년</th></tr></thead></table>';
      $('#superTable').DataTable().destroy();
      $('#superTable').html(domToInject);
      buildTable();
    }

    function buildTable() {
      $('#superTable').DataTable({
        "destroy": true,
        "bDestroy": true,
        "colReorder": true,
        "paging": true, //disable paging
        "deferRender": true, //enable virtual scrolling
        "fixedHeader": true,
        "bInfo": false, //hide paging info
		"info" : false, //hide information
		"bAutoWidth" : true, //자동으로 컬럼폭 계산
		"serverSide" : false,
		"processing" : true,
		"ajax":{
			"url": "/coinflow/get",
			"type":"GET",
			//"dataType" : "JSON",
			"dataSrc" : ''
		},
        //"data": testData,//smallTable,
        "columns": [{
          "data": "market"
        }, {
          "data": "week1",
			"render":function(data,type,row){
				if(type=='display'){
					data = data+'%';
				}
				return data;
			}
        }, {
          "data": "month1",
			"render":function(data,type,row){
				if(type=='display'){
					data = data+'%';
				}
				return data;
			}
        }, {
          "data": "month3",
			"render":function(data,type,row){
				if(type=='display'){
					data = data+'%';
				}
				return data;
			}
        }, {
          "data": "month6",
			"render":function(data,type,row){
				if(type=='display'){
					data = data+'%';
				}
				return data;
			}
        }, {
          "data": "year1",
			"render":function(data,type,row){
				if(type=='display'){
					data = data+'%';
				}
				return data;
			}
        }]
      });
    }
    clearDom();
  }

  function showBigTable() { // 안쓸테이블
    function clearDom() {
      var domToInject = '<table id="superTable" class="display nowrap" style="display: none;" cellspacing="0" width="100%"><thead><tr><th>ID</th><th>First name</th><th>Last name</th><th>ZIP / Post code</th><th>Country</th></tr></thead></table>';
      $('#superTable').DataTable().destroy();
      $('#superTable').html(domToInject);
      buildTable();
    }

    function buildTable() {
      $('#superTable').DataTable({
        "destroy": true,
        "bDestroy": true,
        "serverSide": true,
        "colReorder": true,
        "bFilter": false, //with server on we can not search on the client
        "paging": true, //disable paging
        "deferRender": true, //enable virtual scrolling
		"info" : false, //hide information
        "ajax": function(data, callback, settings) {
          var out = [];

          /*for (var i = data.start, ien = data.start + data.length; i < ien; i++) {
            out.push([data[i].week1 + '%', i + '%', i + '%', i + '%', i + '%']);
          }*/
		for (var d in data) {
            out.push([d['market'],d['week1'] + '%', d['month1'] + '%', d['month3'] + '%', d['month6'] + '%', d['year1'] + '%']);
          }

          setTimeout(function() {
            callback({
              draw: data.draw,
              data: out,
              recordsTotal: 5000000,
              recordsFiltered: 5000000
            });
          }, 50);
        },
        "scroller": {
          loadingIndicator: true
        },
        "scrollY": "60vh",
        "scrollX": true,
        "fixedHeader": false,
        "bInfo": true
      });
    }
    clearDom();
  }

  function showFullTable() {
    function clearDom() {
      var domToInject = '<table id="superTable" class="display" cellspacing="0" width="100%"><thead class="contextMenu"><tr><th>코인명/KRW 기준</th><th>1주일</th><th>1개월</th><th>3개월</th><th>6개월</th><th>1년</th></tr></thead></table>';
      $('#superTable').DataTable().destroy();
      $('#superTable').html(domToInject);
      buildTable();
    }

    function buildTable() {
      $('#superTable').DataTable({
        "destroy": true,
        "bDestroy": true,
        "paging": true,
        "colReorder": true,
        "searchHighlight":true,
        "deferRender": true, //enable virtual scrolling
        "scrollY": "60vh",
        "scroller": {
          loadingIndicator: true
        },
        "scrollX": true,
        "bInfo": true, //hide paging info
		"info" : false, //hide information
        "serverSide" : false,
		"processing" : true,
		"ajax":{
			"url": "/coinflow/get",
			"type":"GET",
			//"dataType" : "JSON",
			"dataSrc" : ''
		},
        //"data": testData,//smallTable,
        "columns": [{
          "data": "market"
        }, {
          "data": "week1",
			"render":function(data,type,row){
				if(type=='display'){
					data = data+'%';
				}
				return data;
			}
        }, {
          "data": "month1",
			"render":function(data,type,row){
				if(type=='display'){
					data = data+'%';
				}
				return data;
			}
        }, {
          "data": "month3",
			"render":function(data,type,row){
				if(type=='display'){
					data = data+'%';
				}
				return data;
			}
        }, {
          "data": "month6",
			"render":function(data,type,row){
				if(type=='display'){
					data = data+'%';
				}
				return data;
			}
        }, {
          "data": "year1",
			"render":function(data,type,row){
				if(type=='display'){
					data = data+'%';
				}
				return data;
			}
        }],
        "dom": "Z<'row'<'small-6 columns'l><'small-6 columns'f>r>t<'row'<'small-6 columns'i><'small-6 columns'p>>",
        "colResize": {
          "rtl": false,
          "resizeCallback": function(column) {
            console.log("Column Resized");
          }
        }
      });
    }

    clearDom();
  }
  showFullTable();
});
$(document).foundation();

/*
*
Done - 1.	Columns should be sortable, multi-sortable and should be able to custom sort functions
Done - 2.	Columns should be rearrange able using DND
 3.	Allow grouping by fields – multi level (currently expected to provide 2 level grouping)
 4.	Custom row heights for groups vs rows
Done - 5.	Virtual rendering (critical feature) handle up to 5000 rows with ease
Done - 6.	Fixed headers
Done - 7.	Columns can be toggled (hidden/shown) (using a column picker) ** Right click on search input for selector **
 8.	Possible options are to provide an alternate paging feature (with 508 compatibility
 9.	Internal state management – Highlighted rows, expanded, collapsed grouped rows
 10.	Search within with highlighting of matched text + navigation via keyboard + 508 compatibility
 11.	Feature for summary and aggregate rows that can be positions both at the top or bottom of the grids.
 12.	Fixed columns

 */