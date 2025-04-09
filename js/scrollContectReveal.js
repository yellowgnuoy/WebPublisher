const content9 = document.querySelector(".contect"); // .contect를 선택

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (scrollY > 2200) {
    content9.classList.add("gaji");
  } else {
    content9.classList.remove("gaji");
  }
});
