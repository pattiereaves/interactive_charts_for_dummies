var formatted_data = new Object;

$(document).ready(function() {
  var input_text;
  $('#example-form').submit(function() {
    input_text = document.getElementById('example-form').getElementsByClassName('example-ta')[0].value;
    convertStringToJSON(input_text);
    return false;
  });
});

function convertStringToJSON(string) {
  var string_rows = string.split(/\n/);
  for (index in string_rows) {
    split_row = string_rows[index].split(/\t/);
    formatted_data[index] = [split_row[0], split_row[1]];
  }
}