'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

function squaredraw(x: number, y: number) {
    for (let i = 0; i < 3; i++) {
        ctx.strokeRect(x, y, 50, 50);
        ctx.strokeStyle = 'black';
        x += 60;
        y += 60;
    }
}

squaredraw(20, 20);