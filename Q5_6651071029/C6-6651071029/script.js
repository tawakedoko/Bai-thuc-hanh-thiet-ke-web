$(document).ready(function () {
  $("#btnCount").on("click", function () {
    var $options = $("#mySelect option");
    var msg = "Tổng số mục: " + $options.length + "\n";
    $options.each(function (i) {
      msg += "\n" + (i + 1) + ". " + $(this).text();
    });
    alert(msg);
  });
});
