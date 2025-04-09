const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const title = item.querySelector(".accordion-title");

  title.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    accordionItems.forEach((el) => el.classList.remove("active")); // 다른 메뉴 닫기
    if (!isActive) {
      item.classList.add("active"); // 본인 열기
    }
  });
});
