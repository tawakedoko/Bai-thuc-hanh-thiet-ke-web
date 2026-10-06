function insert_Row() {
  var table = document.getElementById("sampleTable");
  var row = table.insertRow(table.rows.length); // thêm vào cuối bảng
  var n = table.rows.length;                    // số thứ tự hàng mới
  row.insertCell(0).innerHTML = "Row" + n + " cell1";
  row.insertCell(1).innerHTML = "Row" + n + " cell2";
}
