let colors = ["#3498db", "#9b59b6", "#e74c3c", "#2c3e50", "#d35400"];
var boxes = document.querySelector(".boxes");

//Total box: 5
var totalBox = document.querySelector(".points");
totalBox.innerHTML = 5;
//Function click the box to remmove it
var removeBox = function (box) {
  box.addEventListener("click", function () {
    box.remove();
    var boxesCount = document.querySelectorAll(".box");
    totalBox.innerHTML = boxesCount.length;
  });
};

//Function generate box
var addBox = function (colors) {
  colors.forEach((color) => {
    var box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = color;
    boxes.appendChild(box);
    removeBox(box);
  });
};
addBox(colors);

var btn = document.getElementById("btn");
console.log(btn);
btn.addEventListener("click", function () {
  addBox(colors);
  var boxesCount = document.querySelectorAll(".box");
  totalBox.innerHTML = boxesCount.length;
});
