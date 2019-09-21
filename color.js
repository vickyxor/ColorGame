var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messsageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

colorDisplay.textContent = pickedColor;
for(var i = 0; i<squares.length; i++){
	// for inital colors
	squares[i].style.backgroundColor = colors[i];
	// for click event
	squares[i].addEventListener("click",function(){
		// grab the color
		var clickedColor = this.style.backgroundColor;
		// compare with pickedColor
		if(clickedColor === pickedColor){
			messsageDisplay.textContent = "Correct!!";
			changeColor(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?";
		}else{
			this.style.backgroundColor = "#232323";
			messsageDisplay.textContent = "Try Again";
		}
	})
}

function changeColor(color){
	// loop through all squares
	for(var i =0; i<squares.length; i++){
		// change color of each square
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	// make array
	var arr = [];
	// add num random colors to array
	for(var i =0; i<num ; i++){
		// get random colors & push into array
		arr.push(randomColor());
	}
	// return
	return arr;
}

function randomColor(){
	// pick red from 0 to 255
	var r = Math.floor(Math.random() * 256);
	// pick green from 0 to 255
	var g = Math.floor(Math.random() * 256);
	// pick blue from 0 to 255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b +")";
}

resetButton.addEventListener("click",function(){
	// generate new colours
	colors = generateRandomColors(numSquares);
	// pick a new random color
	pickedColor = pickColor();
	// change text to picked color
	colorDisplay.textContent = pickedColor;
	// change colors of squares
	for(var i = 0; i<squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	messsageDisplay.textContent = "";
	this.textContent = "New Colors";
});

easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i =0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];		
	}else{
		squares[i].style.display = "none";
	}
}});

hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i =0;i<squares.length;i++){
		squares[i].style.backgroundColor = colors[i];		
		squares[i].style.display = "block";
}});