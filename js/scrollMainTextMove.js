window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  document.getElementById("maintext").style.left = -scrollPosition + "px";
});
window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  document.getElementById("maintext2").style.left = +scrollPosition + "px";
});
