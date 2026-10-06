$(document).ready(function () {
  var images = [
    { src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg", width: 240, height: 160 },
    { src: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",      width: 320, height: 195 },
    { src: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",    width: 500, height: 343 }
  ];

  $("#jsstyle").on("click", function () {
    var p = images[Math.floor(Math.random() * images.length)];
    var $img = $("<img>").attr({ src: p.src, width: p.width, height: p.height });
    $("#imageBox").empty().append($img); // thay ảnh cũ bằng ảnh mới
  });
});
