$(document).ready(function () {
  $("#form1").on("submit", function (e) {
    e.preventDefault(); // không reload trang
    var fname = $("#form1 input[name='fname']").val();
    var lname = $("#form1 input[name='lname']").val();
    alert("Họ: " + lname + "\nTên: " + fname);
  });
});
