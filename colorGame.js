var numColors = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDiplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#newColors");
var modeButtons = document.querySelectorAll(".mode");
colorDisplay.textContent = pickedColor;

init();

function init(){
  setupModeButtons();
  setupSquares();
  reset();

  function setupSquares(){
    for(var i = 0; i < squares.length; i++){
      squares[i].addEventListener("click",function(){
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
          messageDiplay.textContent = "Correct!";
          h1.style.backgroundColor = pickedColor;
          resetButton.textContent = "PLAY AGAIN?";
          changeColors(clickedColor);
        }
        else {
          this.style.backgroundColor="#232323";
          this.classList.remove("boxShadow");
          messageDiplay.textContent = "Try again";
        }
      });
    }
  }
  function setupModeButtons(){
    for (var i = 0; i < modeButtons.length; i++){
      modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        if (this.textContent === "Easy"){
          numColors = 3;
        }
        else{
          numColors = 6;
        }
        reset()
      });
    }
  }
}

function reset (){
  colors = generateRandomColors(numColors);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  messageDiplay.textContent = "";
  resetButton.textContent = "NEW COLORS";
  h1.style.backgroundColor = "steelblue";
  for(var i = 0; i < squares.length; i++){
    if (colors[i]){
      squares[i].style = "block";
      squares[i].style.backgroundColor = colors[i];
      squares[i].classList.add("boxShadow");
    }
    else {
      squares[i].style.display = "none";
    }
  }
}

resetButton.addEventListener("click",function(){
  reset ();
});

function changeColors(color){
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
    squares[i].classList.add("boxShadow");
  }  
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  var arr = [];
  for (var i = 0; i<num; i++){
    arr.push(randomColor())
  }
  return arr;
}

function randomColor(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}