var formatted_data = new Object;
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
  if (!numError) {
    $('#data-error').css('display', 'none');
  }
}

function getData() {
    data_value = $('#data').val();
    convertStringToJSON(data_value);
    cleaned_data = convertStringToJSON(data_value);
    row1 = stringToArray(cleaned_data, 0);
    row2 = stringToArray(cleaned_data, 1);

    $('#row1data').val(row1);
    $('#row2data').val(row2);
}

function stringToArray(inputArray, row_choice) {
    var row;


    for(i=0; i < inputArray.length; i++) {
        row += inputArray.i[row_choice];
        if((i+1) < inputArray.length) {
            row += ',';
        } 
    }


    return row;
}