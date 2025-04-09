const textEl = document.getElementById("fillText");
const rawHTML = textEl.innerHTML;
textEl.innerHTML = "";

let totalCharCount = 0;
const spans = [];

const tempDiv = document.createElement("div");
tempDiv.innerHTML = rawHTML;

function processNode(node, parent) {
  if (node.nodeType === Node.TEXT_NODE) {
    for (let char of node.textContent) {
      const span = document.createElement("span");
      span.classList.add("char");
      span.textContent = char;
      parent.appendChild(span);
      spans.push(span);
      totalCharCount++;
    }
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    if (node.tagName === "BR") {
      parent.appendChild(document.createElement("br"));
    } else {
      const wrapper = document.createElement(node.tagName.toLowerCase());
      [...node.attributes].forEach((attr) =>
        wrapper.setAttribute(attr.name, attr.value)
      );
      parent.appendChild(wrapper);
      node.childNodes.forEach((child) => processNode(child, wrapper));
    }
  }
}

tempDiv.childNodes.forEach((node) => processNode(node, textEl));

window.addEventListener("scroll", () => {
  const section = document.querySelector(".introduction");
  const scrollY = window.scrollY;
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;

  const start = sectionTop - window.innerHeight + 1100;
  const end = sectionTop + sectionHeight - 200;

  const progress = Math.min(Math.max((scrollY - start) / (end - start), 0), 1);

  const fillCount = Math.floor(progress * totalCharCount);

  spans.forEach((span, index) => {
    if (index < fillCount) {
      span.classList.add("filled");
    } else {
      span.classList.remove("filled");
    }
  });
});
