'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE


//same as quarters, invert start, iterate4x
//start mid to top

let unit: number = canvas.width / 32;
let sx: number = 0;
let sy: number = canvas.height / 2;
let ex: number = canvas.width / 2;
let ey: number = sy - unit;


function draw(sx, sy, ex, ey) {
    ctx.beginPath();
    ctx.moveTo(sx, sy);
    ctx.lineTo(ex, ey);
    ctx.strokeStyle = 'green';
    ctx.stroke();
}

//tl
while (ey !== 0 - unit) {
    draw(sx, sy, ex, ey);
    sx += unit;
    ey -= unit;
}

//tl finished, set to top
if (ey === 0 - unit) {
    sx = canvas.width / 2;
    sy = 0;
    ex = canvas.width / 2 + unit;
    ey = canvas.height / 2;
    //start tr
    while (ex !== canvas.width + unit) {
        draw(sx, sy, ex, ey);
        sy += unit;
        ex += unit;
    }
}

//tr finished, set to right
if (ex === canvas.width + unit) {
    sx = canvas.width;
    sy = canvas.height / 2;
    ex = canvas.width / 2;
    ey = canvas.height / 2 + unit;
    //start br
    while (ey !== canvas.height + unit) {
        draw(sx, sy, ex, ey);
        sx -= unit;
        ey += unit;
    }
}

//br finished, set to bot
if (ey === canvas.height + unit) {
    sx = canvas.width / 2;
    sy = canvas.height;
    ex = canvas.width / 2 - unit;
    ey = canvas.height / 2;
    //start bl
    while (ex !== 0 - unit) {
        draw(sx, sy, ex, ey);
        sy -= unit;
        ex -= unit;
    }
}


//top left working, need to simplify

/* //tl
while (ey !== 0 - unit) {
    draw(sx, sy, ex, ey);
    sx += unit;
    ey -= unit;
}

//tl finished, set to top
if (ey === 0 - unit) {
    sx = canvas.width / 2;
    sy = 0;
    ex = canvas.width / 2 + unit;
    ey = canvas.height / 2;
    //start tr
    while (ex !== canvas.width + unit) {
        draw(sx, sy, ex, ey);
        sy += unit;
        ex += unit;
    }
} */