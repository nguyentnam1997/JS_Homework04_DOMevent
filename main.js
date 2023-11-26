let colors = ["#3498db", "#9b59b6", "#e74c3c", "#2c3e50", "#d35400"];
const boxes = document.querySelector(".boxes");
console.log(boxes);

//Function for click the button "More boxes"
const addBox = function (colors) {
  colors.forEach((color) => {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = color;
    boxes.appendChild(box);
  });
};
addBox(colors);

//Generate number of boxes
const boxesCount = document.querySelectorAll('.box');
console.log(boxesCount);
const totalBox = document.querySelector(".points");
totalBox.innerHTML = boxesCount.length;

//Click the box to delete it
boxes.addEventListener("click", function () {
    if (box.classList.contains("box")) {
        box.remove();
        totalBox.innerHTML = "";
        totalBox.innerHTML = boxesCount.length;
    }
});