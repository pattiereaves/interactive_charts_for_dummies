$(document).ready(function(){

	$("#renderChart").click(function(){

		var chartTitle 		= $('#title').val();
		var chartTitleSize 	= $('#titlesize').val();
		var chartTitleColor = $('#title-color').val();

		var chartType 		= $('#charttype').val();
		if(chartType == 'h' ){ 
								var thisChartType = 'bhs'; 
		}
		else{ 
								var thisChartType = 'bvs'; 
		}

		var chartWidth	 	= $('#chartwidth').val();

		var chartHeight	 	= $('#chartheight').val();

		var chartCanvasColor = $('#canvas-color').val();
		var chartColor	 	= $('#chart-color').val();
		var chartBarColor	= $('#bar-color').val();

		var chartData		= '';
		var chartLabels		= '';

		var RenderedOutput 	= 'thisChartType: ' + thisChartType + ' chartTitle: ' + chartTitle + ' chartTitleSize:' + chartTitleSize + ' chartTitleColor:' + chartTitleColor + ' chartWidth:' + chartWidth + ' chartHeight:' + chartHeight + ' chartColor:' + chartColor + ' chartCanvasColor : ' + chartCanvasColor + ' chartBarColor: ' + chartBarColor;


		var chartPreviewSRC	= 'http://chart.googleapis.com/chart?cht=' + thisChartType + '&chs=' + chartWidth + 'x' + chartHeight + '&chdlp=r&chco=' + chartBarColor + '&chxt=x%2Cy&chxr&chbh=a%2C3&chd=t:' + chartData + '&chxl=' + chartLabels + '&chxs&chxtc&chma=|150&chtt=' + chartTitle + '&chts=' + chartTitleColor + '%2C' + chartTitleSize ;

		$("#chartPreview").attr("src",chartPreviewSRC);

		$("#codeOutput").html(RenderedOutput);

	});



});

