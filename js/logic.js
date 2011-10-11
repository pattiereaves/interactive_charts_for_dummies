
var formatted_data = new Array;
var error_messages = new Object;

function convertStringToJSON(string) {
  var numError = false;
  string_rows = string.split(/\n/);
  for (index in string_rows) {
    split_row = string_rows[index].split(/\t/);
    if (index == 0) {
      formatted_data['header-1'] = split_row[0];
      formatted_data['header-2'] = split_row[1];
    } else {
		if(split_row[0] !== undefined) {
	      stripped_number = split_row[1].replace(/%|\$|,|#/g,'');
	      re = /^[0-9]*$/;
	      if (!re.test(stripped_number)) {
	        var adjusted_index = parseInt(index) + 1;
	        $('#data-error').html('Row ' + adjusted_index + ', column two contains an invalid character. Only numbers are allowed in column two. Please fix and resubmit.');
	        $('#data-error').css('display', 'block');
	        numError = true;
		
	      } else {
	        formatted_data[index] = [split_row[0], stripped_number];
	      }
	}
    }
  }
  if (!numError) {
    $('#data-error').css('display', 'none');
  }

return formatted_data;
}


function spritDataToObject(string) {
 // desied output is labels labelsname values valuesname
	string_rows = string.split(/\n/);	
	for (index in string_rows) {
    	split_row = string_rows[index].split(/\t/);
    	formatted_data[index] = split_row;
    	}
  return formatted_data;
  //returns two arrays
}

function getData() {
    data_value = $('#data').val();
    cleaned_data = convertStringToJSON(data_value);
    row1 = arrayToString(cleaned_data, 0);
    row2 = arrayToString(cleaned_data, 1);
 //git
    $('#row1data').val(row1);
    $('#row2data').val(row2);
}

function processData() {
    data_value = $('#data').val();
	cleaned_data = spritDataToObject(data_value);
	//cleaned_data has two arrays [0] is labels, with [0][0] being the name of the labels
	// [1] is data values
	label_data = makeQuoteString(cleaned_data[0]);
	datavalue_data = makeNonQuoteString(cleaned_data[1]);
	formatted_data = makeFormatted(cleaned_data[1]);
    $('#chartlabels').attr("value",label_data[1]);
    $('#chartdata').attr("value",datavalue_data[1]);
    $('#chartlabelsname').attr("value",label_data[0]);
    $('#chartdataname').attr("value",datavalue_data[0]);
    $('#chartformatteddata').attr("value",formatted_data[1])
}


function makeQuoteString(inputArray) {
	// returns two strings, label and values made into strings with quotation like "Monday","Tuesday"...
	var val = new Array('','"');
	if (inputArray !== undefined) {
	var lastnum = inputArray.length -1;
		   for(i=0; i < inputArray.length; i++) {
		   		if (i==0){ val[0] = inputArray[i]; }
		   		else { 
		   		val[1] += inputArray[i];
		   			if (i == lastnum) {
		   			} else {
		   			val[1] += '","';
		   			}
		   		}
		   }
	val[1] +='"';
	}
	return val;
}


function makeFormatted(inputArray) {
	dataType = $('input[name=datatype]:checked').val();
	// returns same thing as NonQuote string except numbers are formatted (thousand comma) and $ or % attached...
	var val = new Array('','"');
	if (inputArray !== undefined) {
	var lastnum = inputArray.length -1;
		   for(i=0; i < inputArray.length; i++) {
		   		if (i==0){ val[0] = inputArray[i]; }
		   		else { 
		   		//add $ if currency
		   		if (dataType=="dol") {val[1] += '$';}
		   		val[1] += numberFormat(inputArray[i]);
		   		//add % if percent
		   		if (dataType=="pct") {val[1] += '%';}
		   			if (i == lastnum) {
		   			} else {
		   			val[1] += '","';
		   			}
		   		}
		   }
	val[1] +='"';
	}
	return val;
}

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

function makeNonQuoteString(inputArray) {
	// returns two strings, label and values made into strings with quotation like "Monday","Tuesday"...
	var val = new Array('','');
	var numError = false;
	if (inputArray == undefined) {numError = true;}
	else {var lastnum = inputArray.length -1;
		   for(i=0; i < inputArray.length; i++) {
		   		if (i==0){ val[0] = inputArray[i]; }
		   		else { 
		   		  re = /^[0-9.]*$/;
				  if (!re.test(inputArray[i])) {
					numError = true;
				  } else {
			   		val[1] += inputArray[i];
			   			if (i == lastnum) {
			   			} else {
		   				val[1] += ',';
		   				}
		   			}
		   		}
		   }
	}
	if (numError) {	
		$("#data-processed").hide();
		$("#data-error").show("slow");
	} else {
		$("#data-processed").show("slow");
		$("#data-error").hide();		
	}
	return val;
}



function arrayToString(inputArray, row_choice) {
    var row;

    for(i=0; i < inputArray.length; i++) {
		if(inputArray[i] !== undefined) {
			if(inputArray[i][row_choice] !== undefined || inputArray[i][row_choice] !== '') {
				if(i > 0) {
					row +=',';
				}
				row += inputArray[i][row_choice];
			}
			
		}
    } 

    return row;
}