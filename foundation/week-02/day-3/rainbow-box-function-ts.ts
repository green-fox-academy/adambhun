'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

// separate first run

function squaredraw(x: number, y: string) {
    let color: string[] = ['red', 'blue', 'green', 'purple'];
    let xc = canvas.width/2-x/2;
    let yc = canvas.height/2-x/2;
    ctx.strokeRect(xc, yc, x, x);
    ctx.strokeStyle = y;
    let j = 0;
    for (let i = 0; i < 600; i++) {
        x += 2;
        xc += 1;
        yc += 1;
        xc = canvas.width/2-x/2;
        yc = canvas.height/2-x/2;
        if(j === color.length){
            j = 0;
        }
        ctx.strokeRect(xc, yc, x, x);
        ctx.strokeStyle = color[j];
        j++;
    }
}

squaredraw(1,'black');