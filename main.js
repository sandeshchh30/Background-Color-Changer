let green = document.getElementById("green");
let red = document.getElementById("red");
let blue = document.getElementById("blue");
let yellow = document.getElementById("yellow");
let aqua = document.getElementById("aqua");
let pink = document.getElementById("pink");

let random = document.getElementById("rand");


function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);  
    return `#${randColor.toUpperCase()}` 
}

random.addEventListener("click", function(){
    let randomColor = generateRandomColor();
    document.body.style.backgroundColor = randomColor;
});

green.addEventListener("click", function(){
    document.body.style.backgroundColor = "green";
})
red.addEventListener("click", function(){
    document.body.style.backgroundColor = "red";
})
pink.addEventListener("click", function(){
    document.body.style.backgroundColor = "pink";
})
yellow.addEventListener("click", function(){
    document.body.style.backgroundColor = "yellow";
})
blue.addEventListener("click", function(){
    document.body.style.backgroundColor = "blue";
})
aqua.addEventListener("click", function(){
    document.body.style.backgroundColor = "aqua";
})
