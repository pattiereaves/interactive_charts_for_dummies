   <div id="chart"></div>


var chartTemplate  = '<html>';
var chartTemplate += '<head>';
var chartTemplate += '<title> This is a title </title>';
var chartTemplate += '<script language="javascript" src="http://www.google.com/jsapi"></script>';
var chartTemplate += '</head>';
var chartTemplate += '<body>';
var chartTemplate += '<script type="text/javascript">';
var chartTemplate += "var queryString = '';";
var chartTemplate += "var dataUrl = '';";

var chartTemplate += "function onLoadCallback() {";
var chartTemplate += "if (dataUrl.length > 0) {";
var chartTemplate += "var query = new google.visualization.Query(dataUrl);";
var chartTemplate += "query.setQuery(queryString);";
var chartTemplate += "query.send(handleQueryResponse);";
var chartTemplate += "} else {";
var chartTemplate += "var dataTable = new google.visualization.DataTable();";

          dataTable.addRows(5);

          dataTable.addColumn('number');
          dataTable.addColumn('number');
          dataTable.setValue(0, 0, 13);
          dataTable.setValue(0, 1, 43);
          dataTable.setValue(1, 0, 25);
          dataTable.setValue(1, 1, 29);
          dataTable.setValue(2, 0, 32);
          dataTable.setValue(2, 1, 12);
          dataTable.setValue(3, 0, 42);
          dataTable.setValue(3, 1, 32);
          dataTable.setValue(4, 0, 59);
          dataTable.setValue(4, 1, 23);

          draw(dataTable);
        }
      }

      function draw(dataTable) {
        var vis = new google.visualization.ImageChart(document.getElementById('chart'));
        var options = {
          chf: 'bg,s,EFEFEF|c,s,F7F8F9',
          chxl: '0:|A|B|C|D|E|1:|Apple|Banana|Mango|Orange|Peach',
          chxp: '0,0,5,10,15,20|1,10,30,50,70,90',
          chxr: '',
          chxs: '',
          chxtc: '',
          chxt: 'x,y',
          chbh: 'a,3',
          chs: '460x239',
          cht: 'bhs',
          chco: 'FFCC33,C3D9FF',
          chd: 't:13,25,32,42,59|43,29,12,32,23',
          chdl: 'Male|Female',
          chma: '|150',
          chtt: 'This+is+a+title',
          chts: '323232,10.167'
        };
        vis.draw(dataTable, options);
      }

      function handleQueryResponse(response) {
        if (response.isError()) {
          alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
          return;
        }
        draw(response.getDataTable());
      }

      google.load("visualization", "1", {packages:["imagechart"]});
      google.setOnLoadCallback(onLoadCallback);

	</script>	


   <!-- 

      ?chf=bg,s,EFEFEF|c,s,F7F8F9
   &chxl=0:|A|B|C|D|E|1:|Apple|Banana|Mango|Orange|Peach
   &chxp=0,0,5,10,15,20|1,10,30,50,70,90
   &chxt=x,y
   &chbh=a
   &chs=460x186
   &cht=bhs
   &chco=FFCC33,C3D9FF
   &chd=t:13,25,32,42,59|43,29,12,32,23
   &chdl=Something|Something+else
   &chma=10,10,10,10
   &chtt=This+is+a+title
   &chts=323232,13.5

   -->

  </body>
</html>



