$(document).ready(function(){

	$("#renderChart").click(function(){
				
		//google.setOnLoadCallback(drawChart); is needed for embed code, but to have it on the page, I just need drawChart();
	
		var previewTemplateHTML ='<script type="text/javascript">function drawChart() {var data = new google.visualization.DataTable();var labels = [<%= chartLabels %>];var datavalues = [<%= chartData %>];var labelname = "<%= chartLabelsName %>";var datavaluename = "<%= chartDataName %>";data.addColumn("string", labelname);data.addColumn("number", datavaluename);data.addRows(labels.length);for (var i = 0; i  < labels.length; ++i) {data.setValue(i, 0, labels[i]);data.setValue(i, 1, datavalues[i]);}var chart = new google.visualization.<%= chartType %>(document.getElementById("prevDiv"));chart.draw(data, {<%= chartOption %>});}drawChart();</s'+'cript><div id="prevDiv"></div>';
		
		var embedTemplateHTML ='&#60;script type="text/javascript" src="https://www.google.com/jsapi">&#60;/s'+'cript>&#60;script type="text/javascript">google.load("visualization", "1", {packages:["corechart"]});google.setOnLoadCallback(drawChart);function drawChart() {var data = new google.visualization.DataTable();var labels = [<%= chartLabels %>];var datavalues = [<%= chartData %>];var labelname = "<%= chartLabelsName %>";var datavaluename = "<%= chartDataName %>";data.addColumn("string", labelname);data.addColumn("number", datavaluename);data.addRows(labels.length);for (var i = 0; i  < labels.length; ++i) {data.setValue(i, 0, labels[i]);data.setValue(i, 1, datavalues[i]);}var chart = new google.visualization.<%= chartType %>(document.getElementById("<%= chartDivId %>"));chart.draw(data, {<%= chartOption %>});}&#60;/s'+'cript>&#60;div id="<%= chartDivId %>">&#60;/div>';
	
		var wantTitle		= $('input[name=wanttitle]:checked').val();
		var chartTitle 		= $('#title').val();
		var chartTitleSize 	= $('#titlesize').val();
		var chartTitleColor = $('#title-color').val();

		var chartType 		= $('input[name=charttype]:checked').val();
			if(chartType == 'BarChart' ){ 
							var thisChartType = 'bhs'; 
			}
			else if(chartType == 'LineChart' ){ 
							var thisChartType = 'lxy'; 
			}
			else { 
							var thisChartType = 'bvs'; 
			}

		var chartWidth	 	= $('#chartwidth').val();

		var chartHeight	 	= $('#chartheight').val();

		var chartCanvasColor = $('#canvas-color').val();
		var chartColor	 	= $('#chart-color').val();
		var chartBarColor	= $('#bar-color').val();

		var chartLegend 	= $('#legend-position').val();
		
		var chartData		= $('#chartdata').val();
		var chartLabels		= $('#chartlabels').val();
		var chartDataName		= $('#chartdataname').val();
		var chartLabelsName		= $('#chartlabelsname').val();
		
		var chartDivId		= $('#chartdivid').val();
		

		var chartOption = '';
		if(wantTitle == 'titleyes') {
			chartOption += 'title: "' + chartTitle + '", titleTextStyle: {fontSize: '+ chartTitleSize +', color: "#' + chartTitleColor + '"}, ';
		}
		chartOption += 'width: '+ chartWidth +', height: '+ chartHeight + ', backgroundColor: "#'+ chartColor +'", colors:["#'+ chartBarColor +'"], legend: "'+ chartLegend +'"';
			
			// Min/Max values
			// for horizontal, hAxis
			// fever and vertical, vAxis:{minValue:"0", maxValue:"10"}
		var chartMin	= $('#minv').val();
		var chartMax	= $('#maxv').val();
		var minmax = "";
			if (chartType == 'BarChart')
				{ minmax += 'hAxis: {minValue:"';}
			else { minmax += 'vAxis: {minValue:"';}
			minmax += chartMin + '", maxValue:"' + chartMax + '"}';
		
		//add that to chartOption
			chartOption += ', ' + minmax; 

		var chartDataObject = {
			'chartLabels': chartLabels,
			'chartData': chartData,
			'chartLabelsName': chartLabelsName,
			'chartDataName': chartDataName,
			'chartType': chartType,
			'chartDivId': chartDivId,
			'chartOption': chartOption, 
			'chartDivId': chartDivId		
			}
		
		var previewHTML = _.template(previewTemplateHTML,chartDataObject);
		var embedHTML = _.template(embedTemplateHTML,chartDataObject);


		$("#preview-canvas").html(previewHTML);

		$("#codeOutput").html(embedHTML);
		
		// IMAGE CHART
		var chartPreviewSRC	= 'http://chart.googleapis.com/chart?cht=' + thisChartType + '&chxt=x&chs=' + chartWidth + 'x' + chartHeight + '&chdlp=r&chco=' + chartBarColor + '&chd=t:' + chartData + '&chxl=' + chartLabels + '&chxs&chxtc&chma=|150&chtt=' + chartTitle + '&chts=' + chartTitleColor + '%2C' + chartTitleSize + '&chf=bg,s,' + chartCanvasColor + '|c,s,' + chartColor;

		var RenderedImgOutput 	= '<img src="' + chartPreviewSRC + '" />';		
		$("#codeImgOutput").html(RenderedImgOutput);
		$("#chartPreview").attr("src",chartPreviewSRC);
	});

	$('.colorpicker').wheelColorPicker({dir: 'images'});
	$('.title-colorpicker').wheelColorPicker({dir: 'images', color: '000000'});
	$('.bar-colorpicker').wheelColorPicker({dir: 'images', color: '0033cc'});

	$('#titleno').click(function() {
  		$("#titleoption").hide("slow");
	});
	$('#titleyes').click(function() {
  		$("#titleoption").show("slow");
	});
	
	$('#randomchartdivid').click(function() {
  		$("#chartdivid").attr("value",rand(5));;
	});	
	$('#changeBlue').click(function() {
  		$('.bar-colorpicker').wheelColorPicker({dir: 'images', color: '3f5f9c'});
	});
	$('#changeRed').click(function() {
  		$('.bar-colorpicker').wheelColorPicker({dir: 'images', color: '9B1518'});
	});

	$("#imgchart").hide();
	$('#showimgchart').click(function() {
  		$("#imgchart").toggle("slow");
	});
	
	$("#debug").hide();
	$('.showdebug').click(function() {
  		$("#debug").toggle("slow");
	});
	
	$("#data-processed").hide();
	$("#data-error").hide();

});


function numberFormat(nStr){
     nStr += '';
     x = nStr.split('.');
     x1 = x[0];
     x2 = x.length > 1 ? '.' + x[1] : '';
     var rgx = /(\d+)(\d{3})/;
     while (rgx.test(x1))
       x1 = x1.replace(rgx, '$1' + ',' + '$2');
     return x1 + x2;
}

function rand(length,current){
	current = current ? current : '';
	return length ? rand( --length , "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".charAt( Math.floor( Math.random() * 60 ) ) + current ) : current;
}
