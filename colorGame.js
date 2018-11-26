var numSquares= 6;
var colors= GenerateRandomColor(numSquares);

var squares= document.querySelectorAll(".square");
var pickedColor= pickColor();
var colorDisplay= document.querySelector("#colorDisplay");
var messageDisplay= document.querySelector("#message");
var h1= document.querySelector("h1");
var resetButton= document.querySelector("#reset");
var easyBtn= document.querySelector("#easyBtn");
var hardBtn= document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares=3;
	colors= GenerateRandomColor(numSquares);
	pickedColor= pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i= 0; i< squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}

});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares=6;
	colors= GenerateRandomColor(numSquares);
	pickedColor= pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i= 0; i< squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
	}
});

colorDisplay.textContent = pickedColor;

for(var i =0; i<squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add event listeners to squares
	squares[i].addEventListener("click",function(){
		if(this.style.backgroundColor=== pickedColor){
			messageDisplay.textContent= "Correct!!";
			changeColors();
			h1.style.backgroundColor= pickedColor;
			resetButton.textContent= "Play Again?";
		}
		else{
			this.style.backgroundColor= "#4F3D37";
			messageDisplay.textContent= "Try Again!";
		}
	});
}

function changeColors(){
	for(var i=0; i< squares.length; i++){
		squares[i].style.backgroundColor= pickedColor;
	}
}

function pickColor(){
	var random =Math.floor(Math.random()*colors.length);
	return colors[random];
}

function GenerateRandomColor(num){
	 var arr= [];
	 for(var i = 0; i<num; i++){
	 	arr.push(randomColor());
	 }
	 return arr;
}

function randomColor(){
	var r= Math.floor(Math.random() * 256);
	var g= Math.floor(Math.random() * 256);
	var b= Math.floor(Math.random() * 256);

	return "rgb("+ r +", "+ g +", "+ b+ ")";
}

resetButton.addEventListener("click", function(){
	//generate all new colors
	colors= GenerateRandomColor(numSquares);
	//pick a new random color from array
	pickedColor= pickColor();
	//change colorDisplay
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent= "";
	this.textContent= "new colors";
	//change color of square
	for(var i =0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	resetButton.textContent= "New Colors";
	h1.style.backgroundColor= "steelblue";
});