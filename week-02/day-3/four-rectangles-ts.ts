
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.


//a & b = rect size, x & y = pos 

function linedraw(x: number, y: number, a: number, b: number) {
    let color: string[] = ['red', 'blue', 'green', 'purple'];
    let i: number = 0;
    for (i; i < 4; i++) {
        ctx.strokeRect(x, y, a, b);
        ctx.strokeStyle = color[i];
        a += 15;
        b += 15;
        x += a + 10;
        y += b +10;
    }
}


linedraw(30, 30, 20, 30);