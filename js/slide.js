const slide = document.querySelector(".slide");
let slideWidth = slide.clientWidth;

const prevBtn = document.querySelector(".slide_prev_button");
const nextBtn = document.querySelector(".slide_next_button");

const slideItems = document.querySelectorAll(".slide_item");

const maxSlide = slideItems.length;

let currSlide = 1;

const pagination = document.querySelector(".slide_pagination");

for (let i = 0; i < maxSlide; i++) {
  if (i === 0) pagination.innerHTML += `<li class="active">•</li>`;
  else pagination.innerHTML += `<li>•</li>`;
}

const paginationItems = document.querySelectorAll(".slide_pagination > li");

function nextMove() {
  currSlide++;
  if (currSlide <= maxSlide) {
    const offset = slideWidth * (currSlide - 1);
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  } else {
    currSlide--;
  }
}
function prevMove() {
  currSlide--;
  if (currSlide > 0) {
    const offset = slideWidth * (currSlide - 1);
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  } else {
    currSlide++;
  }
}

nextBtn.addEventListener("click", () => {
  nextMove();
});
prevBtn.addEventListener("click", () => {
  prevMove();
});

window.addEventListener("resize", () => {
  slideWidth = slide.clientWidth;
});

for (let i = 0; i < maxSlide; i++) {
  paginationItems[i].addEventListener("click", () => {
    currSlide = i + 1;
    const offset = slideWidth * (currSlide - 1);
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  });
}

let startPoint = 0;
let endPoint = 0;

slide.addEventListener("mousedown", (e) => {
  console.log("mousedown", e.pageX);
  startPoint = e.pageX;
});

slide.addEventListener("mouseup", (e) => {
  console.log("mouseup", e.pageX);
  endPoint = e.pageX;
  if (startPoint < endPoint) {
    console.log("prev move");
    prevMove();
  } else if (startPoint > endPoint) {
    console.log("next move");
    nextMove();
  }
});

slide.addEventListener("touchstart", (e) => {
  console.log("touchstart", e.touches[0].pageX);
  startPoint = e.touches[0].pageX;
});
slide.addEventListener("touchend", (e) => {
  console.log("touchend", e.changedTouches[0].pageX);
  endPoint = e.changedTouches[0].pageX;
  if (startPoint < endPoint) {
    console.log("prev move");
    prevMove();
  } else if (startPoint > endPoint) {
    console.log("next move");
    nextMove();
  }
});
