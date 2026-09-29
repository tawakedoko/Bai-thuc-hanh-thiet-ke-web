document.getElementById("btnTinh").onclick = function () {
  var luong = parseFloat(document.getElementById("luong").value);
  var heso = parseFloat(document.getElementById("heso").value);
  var kq = document.getElementById("ketqua");
  if (isNaN(luong)) { kq.innerText = "Lương không hợp lệ!"; return; }
  kq.innerText = Math.round(luong * heso);
};
