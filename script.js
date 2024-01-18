const DEFAULT_SIZE = 16;
const DEFAULT_MODE = "color"
const DEFAULT_COLOR = "#000000";
let CURRENT_SIZE = DEFAULT_SIZE;
let CURRENT_MODE = DEFAULT_MODE;




let slider = document.getElementById("sliderGrid")
let sliderTxt = document.getElementById("slidertxt")
let board = document.getElementById("container")
let squares = document.querySelectorAll("gridB")

function makeRows(size) {

  squares.forEach((gridB) => gridB.remove()); {
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  container.innerHTML = '';

let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "gridItem";
  }

}
}

slider.addEventListener('input', function() {


  let sliderValue = slider.value;
  sliderTxt.textContent = slider.value + "x" + slider.value;

  makeRows(sliderValue, sliderValue);

});

// makes 16x16 grid
makeRows(DEFAULT_SIZE, DEFAULT_SIZE); 


let colorValue = document.getElementById("colorMode").value;
let color = document.getElementById("colorMode");
let rnbwMode = document.getElementById("rnbwMode");
const erase = document.getElementById("erase");
const clear = document.getElementById("clr");
let items = document.querySelectorAll(".gridItem");
let CURRENT_COLOR = colorValue;

color.addEventListener("input", function() {
  let CURRENT_COLOR = color.value;
console.log(CURRENT_COLOR);
});



color.addEventListener('click', function() {
  let CURRENT_MODE = "color";
  console.log(CURRENT_MODE);
});

rnbwMode.addEventListener("click", function() {
  let CURRENT_MODE = "rnbw";
  console.log(CURRENT_MODE);
});

erase.addEventListener("click", function() {
  let CURRENT_MODE = "erase";
  console.log(CURRENT_MODE);
});

clear.addEventListener("click", function() {
  let CURRENT_MODE = "clear";
  console.log(CURRENT_MODE);
});


if (CURRENT_MODE === "color") {
  items.forEach((item) => {
    item.addEventListener("mouseenter", function() {
      let CURRENT_COLOR = color.value;
      item.style.backgroundColor = CURRENT_COLOR;
    });
  });
}
