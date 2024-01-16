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
makeRows(16, 16);


let color = document.querySelector("colorMode")
let rnbwMode = document.getElementById("rnbwMode");
let erase = document.getElementById("erase");
let clear = document.getElementById("clr");







