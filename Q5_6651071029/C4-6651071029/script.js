$(document).ready(function () {
  $("#btnRemove").on("click", function () {
    if ($("#colorSelect option").length === 0) {
      alert("Danh sách đã trống!");
      return;
    }
    // xóa mục đang được chọn
    $("#colorSelect option:selected").remove();
  });
});
