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
		var thisChartType = 'bhs'; 

		var chartWidth	 	= $('#chartwidth').val();

		var chartHeight	 	= $('#chartheight').val();

		var chartCanvasColor = $('#canvas-color').val();
		var chartColor	 	= $('#chart-color').val();
		var chartBarColor	= $('#bar-color').val();

		var chartData		= '25,4,15,32,8,9';


		var chartLabels		= '';

		var chartPreviewSRC	= 'http://chart.googleapis.com/chart?cht=' + thisChartType + '&chs=' + chartWidth + 'x' + chartHeight + '&chdlp=r&chco=' + chartBarColor + '&chd=t:' + chartData + '&chxl=' + chartLabels + '&chxs&chxtc&chma=|150&chtt=' + chartTitle + '&chts=' + chartTitleColor + '%2C' + chartTitleSize + '&chf=bg,s,' + chartCanvasColor + '|c,s,' + chartColor;

		//var RenderedOutput	= 'http://chart.googleapis.com/chart?cht=' + thisChartType + '&chs=' + chartWidth + 'x' + chartHeight + '&chdlp=r&chco=' + chartBarColor + '&chd=t:' + chartData + '&chxl=' + chartLabels + '&chxs&chxtc&chma=|150&chtt=' + chartTitle + '&chts=' + chartTitleColor + '%2C' + chartTitleSize ;


		var RenderedOutput 	= '<img src="' + chartPreviewSRC + '" alt="' + chartTitle + '" title="' + chartTitle + '" />';


		$("#chartPreview").attr("src",chartPreviewSRC);

		$("#codeOutput").html(RenderedOutput);

	});

	$('.colorpicker').wheelColorPicker({dir: 'images'});
	$('.title-colorpicker').wheelColorPicker({dir: 'images', color: '000000'});
	$('.bar-colorpicker').wheelColorPicker({dir: 'images', color: '6699cc'});

});

