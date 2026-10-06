$(document).ready(function () {
  $("#linkForm").on("submit", function (e) {
    e.preventDefault();
    var url = $.trim($("#linkInput").val());

    if (url === "") {
      alert("Vui lòng nhập đường link!");
      return;
    }
    // tự thêm http:// nếu người dùng quên
    if (!/^https?:\/\//i.test(url)) {
      url = "http://" + url;
    }

    // OK -> chuyển trang, Cancel -> không làm gì
    if (confirm("Bạn có muốn chuyển đến:\n" + url + " ?")) {
      window.location.href = url;
    }
  });
});
