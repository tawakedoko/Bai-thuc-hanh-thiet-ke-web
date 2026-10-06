function getFormvalue() {
  var f = document.getElementById("form1");
  var fname = f.elements["fname"].value;
  var lname = f.elements["lname"].value;
  document.getElementById("output").innerText =
    "First name: " + fname + " - Last name: " + lname;
  alert("First name: " + fname + "\nLast name: " + lname);
  return false; // không gửi form đi, giữ nguyên trang để xem kết quả
}
