var selThang = document.getElementById("thang");
for (var i = 1; i <= 12; i++) {
  var opt = document.createElement("option");
  opt.value = i;
  opt.text = i;
  selThang.appendChild(opt);
}

document.getElementById("btnThu").onclick = function () {
  var ngay = parseInt(document.getElementById("ngay").value, 10);
  var thang = parseInt(selThang.value, 10);
  var nam = parseInt(document.getElementById("nam").value, 10);
  var kq = document.getElementById("ketqua");

  var d = new Date(nam, thang - 1, ngay);
  // Kiểm tra ngày hợp lệ (vd: 31/2 sẽ bị tràn sang tháng sau)
  if (isNaN(d.getTime()) || d.getDate() !== ngay ||
      d.getMonth() !== thang - 1 || d.getFullYear() !== nam) {
    kq.innerText = "Ngày tháng năm không hợp lệ!";
    return;
  }
  var day = d.getDay(); // 0 = Chủ nhật, 1 = Thứ 2, ...
  var thu = (day === 0) ? "Chủ nhật" : "Thứ " + (day + 1);
  kq.innerText = thu + " Ngày " + ngay + " tháng " + thang + " năm " + nam;
};
