'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

function squaredraw(x: number) {
    ctx.strokeStyle = 'red';
    for (let i = 0; i < 3; i++) {
        let xc = canvas.width/2-x/2;
        let yc = canvas.height/2-x/2;
        ctx.strokeRect(xc, yc, x, x);
        x += 10;
    }
}

squaredraw(20);