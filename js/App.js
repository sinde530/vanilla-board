const canvas = document.getElementById("Canvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("Color");

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}


function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
    // console.log(x, y)
}

function onMouseDown(event) {
    // console.log(event)
    startPainting()
}

function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    console.log(color)
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting)
}

// Array.from(colors).forEach(color =>
//     color.addEventListener("click", handleColorClick)
// );

Array.from(colors).forEach(color =>
    color.addEventListener("click", handleColorClick)
);
