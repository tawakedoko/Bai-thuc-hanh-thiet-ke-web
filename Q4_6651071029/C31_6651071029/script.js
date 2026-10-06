function removecolor() {
  var sel = document.getElementById("colorSelect");
  if (sel.options.length === 0) {
    alert("Danh sách đã hết, không còn gì để xóa!");
    return;
  }
  sel.remove(sel.selectedIndex); // xóa mục đang được chọn
}
