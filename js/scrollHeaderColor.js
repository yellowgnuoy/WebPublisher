window.addEventListener("scroll", function () {
  const skillSection = document.querySelector(".skill");
  const button = document.querySelector("#headerButton");
  const menuDivs = document.querySelectorAll(".menu");
  const skillSectionTop = skillSection.offsetTop;
  const skillSectionBottom = skillSectionTop + skillSection.offsetHeight;

  if (
    window.pageYOffset >= skillSectionTop &&
    window.pageYOffset <= skillSectionBottom
  ) {
    button.style.backgroundColor = "#101010";
    menuDivs.forEach(function (div) {
      div.style.backgroundColor = "#D3FA09";
    });
  } else {
    button.style.backgroundColor = "#D3FA09";
    menuDivs.forEach(function (div) {
      div.style.backgroundColor = "#101010";
    });
  }
});
