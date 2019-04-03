'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

//look to diamond for inspiration
//draw hex function (from top) -- 6 triangles from prev \ squares + triangles??? \ circle grid for help
//use diamond loop to change function parameters
//loop to set row-start
//loop to increment coords x times based on #of triangles to draw
//three sections - top3 - mid4 - bot3

// attempt with rotating tri function using translate and rotate methods failed


let x: number = 375;
let y: number = 400;
//hex side
let t: number = 50;
let lineCount: number = 3;
let height = t * (Math.sqrt(3));
let trih = Math.sqrt((Math.pow(height, 2) + Math.sqrt(Math.pow(t,2))));

function hex (x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + t / 2, y);
    ctx.lineTo(x - t / 2, y + height);
    ctx.lineTo(x, y);
    ctx.closePath();
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.moveTo(x,y);
}

console.log(trih);
