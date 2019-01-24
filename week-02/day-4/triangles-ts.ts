
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE


//look to pyramid for inspiration
//draw equilateral triangle function (from top)
//or previous exercises
//use pyramid loop to change function parameters
//loop to set row-start
//loop to increment coords x times based on #of triangles to draw
//# of triangles = row#


let x: number = 400;
// y = canvas height - construct height
let y: number = 25;
let t: number = 30;
let lineCount: number = 20;
let height = t * (Math.sqrt(3)/2);

function tri(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + t / 2, y + height);
    ctx.lineTo(x - t / 2, y + height);
    ctx.lineTo(x, y);
    ctx.moveTo(x + t, y)
    ctx.closePath();
    ctx.strokeStyle = 'black';
    ctx.stroke();
}

let index = 0;

for (index; index <= lineCount; index++) { 
    let index2 = 0;
    for (index2; index2 < index; index2++) {
        tri(x, y);
        x += t;
    }
    y += height;
    x = canvas.width / 2 - (t * index2 / 2);
    index2 = 0;
}
