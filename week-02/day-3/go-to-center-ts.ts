'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.

let x: number;
let y: number;

function linedraw(x: number, y: number){
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(300, 200);
ctx.strokeStyle = 'green';
ctx.stroke();
}

function three(x,y) {
    for (let index = 0; index < 3; index++) {
    linedraw(x,y);
    x += 100;
    y += 100;
    }
}

three(1,1);