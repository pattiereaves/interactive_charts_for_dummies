$(document).ready(function(){

	$("#render").click(function(){

		var chartTitle 		= $('#title').val();
		var chartTitleSize 	= $('#titlesize').val();
		var chartTitleColor = $('#titlecolor').val();

		var chartType 		= $('#charttype').val();
		var chartWidth	 	= $('#chartwidth').val();
		var chartHeight	 	= $('#chartheight').val();
		var chartColor	 	= $('#chartcolor').val();




		$("#rendered").html(RenderedOutput);

	});

});
