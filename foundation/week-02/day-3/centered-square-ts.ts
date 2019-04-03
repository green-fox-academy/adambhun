'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw a green 10x10 square to the center of the canvas.



function linedraw(x: number, y: number){
    let xc = canvas.width/2-x/2;
    let yc = canvas.height/2-y/2;
    ctx.beginPath();
    ctx.moveTo(xc, yc);
    xc += x;
    ctx.lineTo(xc, yc);
    ctx.strokeStyle = 'green';
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(xc, yc);
    yc += y;
    ctx.lineTo(xc, yc);
    ctx.strokeStyle = 'green';
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(xc, yc);
    xc -= x;
    ctx.lineTo(xc, yc);
    ctx.strokeStyle = 'green';
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(xc, yc);
    yc -= y;
    ctx.lineTo(xc, yc);
    ctx.strokeStyle = 'green';
    ctx.stroke();
}

linedraw(10,10)