let DEFAULT_SIZE = 16;
let colors = "black";


let slider = document.getElementById("sliderGrid")
let sliderTxt = document.getElementById("slidertxt")
let board = document.getElementById("container")
let squares = document.querySelectorAll("gridB")
let colorValue = document.getElementById("colorMode").value;
let color = document.getElementById("colorMode");
let rnbwMode = document.getElementById("rnbwMode");
let erase = document.getElementById("erase");
let clear = document.getElementById("clr");
let items = document.querySelectorAll(".gridItem");

function makeRows(size) {

  squares.forEach((gridB) => gridB.remove()); {
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  container.innerHTML = '';

let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let cell = document.createElement("div");
    cell.addEventListener("mouseover", changeColor)
    cell.backgroundColor = "white";
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

color.addEventListener('input', function changeDraw() {
  colors = color.value
})

function changeColor() {
  if (colors === "random") {
  this.style.backgroundColor = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');

  }else {
  this.style.backgroundColor = colors;
  }
}

function changeMode(choise) {
  colors = choise;
}

function clearBoard() {
  document.querySelectorAll(".gridItem").forEach((gridB) => gridB.style.backgroundColor = "white");
}
