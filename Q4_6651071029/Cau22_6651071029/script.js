function getNumbers() {
  var a = parseFloat(document.getElementById("n1").value);
  var b = parseFloat(document.getElementById("n2").value);
  if (isNaN(a) || isNaN(b)) {
    document.getElementById("result").innerText = "Vui lòng nhập hai số hợp lệ!";
    return null;
  }
  return [a, b];
}
document.getElementById("btnMul").onclick = function () {
  var n = getNumbers();
  if (n) document.getElementById("result").innerText = n[0] * n[1];
};
document.getElementById("btnDiv").onclick = function () {
  var n = getNumbers();
  if (!n) return;
  document.getElementById("result").innerText =
    n[1] === 0 ? "Không thể chia cho 0!" : n[0] / n[1];
};
