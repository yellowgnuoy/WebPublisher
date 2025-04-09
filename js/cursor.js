const cursor = document.querySelector(".blur_cousor");

window.addEventListener("mousemove", (e) => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});
