const colors = ["green", "Aqua", "rgb(255, 204, 204)", "#ffcc99"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    // get random number between 0-3
    const randomNumber = getRandomNumbers();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumbers () {
    return Math.floor(Math.random() * colors.length);
}