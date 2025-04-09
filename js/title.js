const SEC = 0.5;
const INIT_DELAY = 600;

function clipText(dom) {
  dom.classList.remove("on");
  void dom.offsetWidth; // 강제 리플로우
  dom.classList.add("on");
}

const targets = document.querySelectorAll(".introduction h3");

function animateSequentially() {
  targets.forEach((target, index) => {
    setTimeout(() => {
      clipText(target);
    }, INIT_DELAY + index * SEC * 1000);
  });
}

let lastAnimated = 0;

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const now = Date.now();
      // 최근 실행한 이후 1.5초 지나야 재실행
      if (now - lastAnimated > 1500) {
        animateSequentially();
        lastAnimated = now;
      }
    }
  });
});

targets.forEach((target) => observer.observe(target));
