var formatted_data = new Object;

function convertStringToJSON(string) {
  string_rows = string.split(/\n/);
  for (index in string_rows) {
    split_row = string_rows[index].split(/\t/);
    stripped_number = split_row[1].replace(/%/,'');
    formatted_data[index] = [split_row[0], stripped_number];
    console.log(formatted_data);
  }
}

function getData() {
	var data_value;
	data_value = $('#data').val();
	convertStringToJSON(data_value);
}