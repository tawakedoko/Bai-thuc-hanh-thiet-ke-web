$(document).ready(function () {

  function setError(field, msg) {
    $("#err-" + field).text(msg);
    $("#" + field).toggleClass("invalid", msg !== "");
  }

  // ---- Các hàm kiểm tra: trả về chuỗi lỗi ("" nếu hợp lệ) ----
  function checkRequired(field, label) {
    return $.trim($("#" + field).val()) === "" ? label + " không được để trống" : "";
  }

  function checkEmail(v) {
    v = $.trim(v);
    if (v === "") return "Email không được để trống";
    // đúng 1 dấu @
    if (v.split("@").length !== 2) return "Email phải có đúng 1 dấu @";
    var parts = v.split("@"), account = parts[0], domain = parts[1];
    // account: không rỗng, tối đa 1 dấu chấm
    if (account === "" || /\s/.test(v)) return "Tên account không hợp lệ";
    if ((account.match(/\./g) || []).length > 1) return "Tên account chỉ có tối đa 1 dấu chấm";
    if (/^\.|\.$/.test(account)) return "Tên account không hợp lệ";
    // domain: có ít nhất 1 dấu chấm, không rỗng giữa các dấu chấm
    if (domain.indexOf(".") === -1) return "Domain phải có ít nhất 1 dấu chấm";
    if (!/^[^.]+(\.[^.]+)+$/.test(domain)) return "Domain không hợp lệ";
    return "";
  }

  function checkBirthday(v) {
    v = $.trim(v);
    if (v === "") return "Ngày sinh không được để trống";
    // mm/dd/yyyy hoặc mm-dd-yyyy (dấu phân cách phải giống nhau)
    var m = /^(\d{1,2})([\/-])(\d{1,2})\2(\d{4})$/.exec(v);
    if (!m) return "Định dạng phải là mm/dd/yyyy hoặc mm-dd-yyyy";
    var month = parseInt(m[1], 10), day = parseInt(m[3], 10), year = parseInt(m[4], 10);
    if (month < 1 || month > 12) return "Tháng phải từ 1 đến 12";
    if (year >= new Date().getFullYear()) return "Năm phải nhỏ hơn năm hiện tại";
    var maxDay = new Date(year, month, 0).getDate();
    if (day < 1 || day > maxDay) return "Ngày không hợp lệ (tháng " + month + " có " + maxDay + " ngày)";
    return "";
  }

  function checkZip(v) {
    v = $.trim(v);
    if (v === "") return "ZIP code không được để trống";
    return /^\d{5}$/.test(v) ? "" : "ZIP code phải có đúng 5 chữ số";
  }

  // ---- Finish ----
  $("#regForm").on("submit", function (e) {
    e.preventDefault();
    var ok = true;

    function apply(field, msg) {
      setError(field, msg);
      if (msg) ok = false;
    }

    apply("name", checkRequired("name", "Tên"));

    if ($("input[name='sex']:checked").length === 0) {
      $("#err-sex").text("Vui lòng chọn giới tính");
      ok = false;
    } else {
      $("#err-sex").text("");
    }

    apply("email", checkEmail($("#email").val()));
    apply("birthday", checkBirthday($("#birthday").val()));
    apply("street", checkRequired("street", "Địa chỉ"));
    apply("region", $("#region").val() === "" ? "Vui lòng chọn khu vực" : "");
    apply("zip", checkZip($("#zip").val()));

    if (ok) {
      alert("Đăng ký thành công!");
    }
  });

  // ---- Clear: xóa toàn bộ dữ liệu + lỗi ----
  $("#btnClear").on("click", function () {
    $("#regForm")[0].reset();
    $("#regForm input[type='text']").val("");
    $("#region").val("");
    $("input[name='sex']").prop("checked", false);
    $(".error").text("");
    $(".invalid").removeClass("invalid");
  });
});
