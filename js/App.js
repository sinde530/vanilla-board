const canvas = document.getElementById("Canvas");

let painting = false;

function stopPainting() {
    painting = false
}


function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    // console.log(x, y)
}

function onMouseDown(event) {
    // console.log(event)
    painting = true;
}

function onMouseUp(event) {
    // console.log(event)
    stopPainting()
}

// function onMouseLeave(event) {
//     stopPainting()
// }


if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", stopPainting)
}