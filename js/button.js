const button = document.getElementById("headerButton");
const header = document.querySelector("header");
let animationInProgress = false;

button.addEventListener("mouseover", () => {
  header.style.display = "block";
});

button.addEventListener("mouseout", () => {
  setTimeout(() => {
    header.style.display = "none";
  }, 2000);
});

window.addEventListener("scroll", function () {
  var scrollHeight = document.documentElement.scrollHeight;
  var scrollTop = document.documentElement.scrollTop;
  var clientHeight = document.documentElement.clientHeight;
  var menus = button.getElementsByClassName("common");

  // 스크롤이 페이지 하단에 도달했는지 검사
  if (scrollTop + clientHeight >= scrollHeight) {
    for (var i = 0; i < menus.length; i++) {
      menus[i].classList.remove("menu");
      menus[i].classList.add("top");
      button.addEventListener("mouseover", () => {
        header.style.display = "none";
      });
    }
  } else {
    for (var i = 0; i < menus.length; i++) {
      menus[i].classList.remove("top");
      menus[i].classList.add("menu");
      button.addEventListener("mouseover", () => {
        header.style.display = "block";
      });
    }
  }
});
