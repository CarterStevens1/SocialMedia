const checkboxEl = document.querySelector("input");
const topBar = document.querySelector(".topBar");
const topboxes = document.querySelectorAll(".topBox");
const botboxes = document.querySelectorAll(".botBox");
const boxes = document.querySelectorAll(".box");

checkboxEl.addEventListener("change", function () {
  document.body.classList.toggle("dark");
  topBar.classList.toggle("darktopBar");

  boxes.forEach((box) => box.classList.toggle("darkBox"));
  topboxes.forEach((box) => box.classList.toggle("darkBox"));
  botboxes.forEach((box) => box.classList.toggle("darkBox"));
});
