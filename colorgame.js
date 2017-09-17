let colors = generateRandomColors(6);
    
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function(){
    //generate all new colors
    colors = generateRandomColors(6);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //change colors of sqaures
    for(let i =0; i < squares.length; i++){
        squares[i].style.background = colors[i];
    }
    h1.style.background = "#232323";
})

colorDisplay.textContent = pickedColor;
for(let i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.background = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        //grab color of picked square
        let clickedColor = this.style.background;
        //compare color to pickedColor
        if(clickedColor == pickedColor){
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
            resetButton.textContent = "Play Again?";
        }else{
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });

}
function changeColors(color){
    //loop through all squares
    for(let i = 0; i < squares.length; i++){
        //change each color to the given color
        squares[i].style.background = color;
    }
}
function pickColor(){
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomColors(num){
    //make an array
    let arr = [];
    //add num random colors to array
    for(let i = 0; i < num; i++){
        //get random color and push into array
        arr.push(randomColor());
    }
    //return the array
    return arr;

}
function randomColor(){
    //pck a "red" from 0-255
    let r = Math.floor(Math.random() * 256);
    //pck a "green" from 0-255
    let g = Math.floor(Math.random() * 256); 
    //pck a "blue" from 0-255
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
