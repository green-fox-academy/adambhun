'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE


//linedraw
//16x16 grid -> canvas size
// variables for pos and lineto
//for(linedraw, variables++)

let unit: number = canvas.width / 64;
let sx: number = 0;
let sy: number = 0;
let ex: number = 0;
let ey: number = canvas.height;
let color: string = 'green';

function draw(sx, sy, ex, ey) {
    ctx.beginPath();
    ctx.moveTo(sx, sy);
    ctx.lineTo(ex, ey);
    ctx.strokeStyle = color;
    ctx.stroke();
}

//bottom left
while (ex !== canvas.width + unit) {
    draw(sx, sy, ex, ey);
    sy += unit;
    ex += unit;
}

//bl finished, adjust
if (ex === canvas.width +unit) {
    sx = 0;
    sy = 0;
    ex = canvas.width;
    ey = unit;
    //start top right
    while (ey !== canvas.height + unit) {
        color = 'purple';
        draw(sx, sy, ex, ey);
        sx += unit;
        ey += unit;
    }
}


//tr finished, adjust
if (ey === canvas.width +unit) {
    sx = canvas.width;
    sy = 0;
    ex = canvas.width - unit;
    ey = canvas.height;
    //start br
    while (ex !== 0 - unit) {
        color = 'red';
        draw(sx, sy, ex, ey);
        sy += unit;
        ex -= unit;
    }
}

//br finished, adjust
if (ex === 0 - unit) {
    sx = 0;
    sy = canvas.height;
    ex = unit;
    ey = 0;
    //start tl
    while (ex !== canvas.height + unit) {
        color = 'blue';
        draw(sx, sy, ex, ey);
        sy -= unit;
        ex += unit;
    }
}


//this works, but could be shorter

/* //bottom left
while (ex !== canvas.width) {
    ctx.beginPath();
    ctx.moveTo(sx, sy);
    ctx.lineTo(ex, ey);
    ctx.strokeStyle = 'green';
    ctx.stroke();
    sy += unit;
    ex += unit;
    //bl finished, adjust
    if (ex === canvas.width) {
        sx = 0;
        sy = 0;
        ex = canvas.width;
        ey = unit;
        //start top right
        while (ey !== canvas.width) {
            ctx.beginPath();
            ctx.moveTo(sx, sy);
            ctx.lineTo(ex, ey);
            ctx.strokeStyle = 'purple';
            ctx.stroke();
            sx += unit;
            ey += unit;
        }
    }
} */