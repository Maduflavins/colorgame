let colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
]

let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("message");
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