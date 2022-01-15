const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);
checkBoxes(); // To display the contents that should alread fit in the view based on the height

function checkBoxes() {
  // Trigger point for the element to appear
  // Trigger point to be less than the innerHeight
  const triggerBottom = window.innerHeight / 5 * 4;

  boxes.forEach((box) => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
