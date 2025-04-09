let isDragging = false;

document.querySelectorAll(".slide_item").forEach((item) => {
  let startX = 0;

  item.addEventListener("mousedown", (e) => {
    isDragging = false;
    startX = e.clientX;
  });

  item.addEventListener("mouseup", (e) => {
    if (!isDragging) {
      const url = item.dataset.url;
      if (url) window.open(url, "_blank");
    }
  });

  item.addEventListener("mousemove", (e) => {
    if (Math.abs(e.clientX - startX) > 5) {
      isDragging = true;
    }
  });
});
