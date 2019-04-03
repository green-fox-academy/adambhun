'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// draw 3 lines with that function. Use loop for that.


let x: number;
let y: number;

function linedraw(x: number, y: number){
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x+50, y);
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