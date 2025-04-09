window.addEventListener("scroll", () => {
  const roll = document.querySelector(".work-content");
  const scrollTop = window.pageYOffset;

  if (scrollTop > roll.offsetTop + 300) {
    const scale =
      1 - (scrollTop - (roll.offsetTop - 300)) / (roll.offsetHeight * 5); // 스크롤이 진행됨에 따라 1에서 점점 줄어듭니다.
    roll.style.transform = `scale(${Math.max(scale, 0.96)})`; // scale이 0.96보다 작아지지 않도록 합니다.
  } else {
    roll.style.transform = "scale(1)"; // 원래 크기인 100%로 설정합니다.
  }
});
