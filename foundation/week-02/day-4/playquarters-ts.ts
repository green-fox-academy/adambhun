'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

//linedraw
//4quadrands: 1/4 1/16 1/256
// variables for pos and lineto
//for(linedraw, variables++)

//if - adjust starting pos, ratio
//for - draw segment x times, adjust position

//NEVER SET TO 0, WORK BASED ON PREVIOUS COORDS


let resolution: number = (canvas.width / 32);
let sx: number = 0;
let sy: number = 0;
let ex: number = 0;
let ey: number = canvas.height / 2;
let drawtimes: number = 1;

function segment() {
    let color: string;
    function draw(sx, sy, ex, ey) {
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(ex, ey);
        ctx.strokeStyle = color;
        ctx.stroke();
    }
    
    //draws from top-left to bot-right
    function green(sx, sy, ex, ey) {
        for (let i = 0; i <= 16; i++) {
            color = 'green';
            draw(sx, sy, ex, ey);
            sy += resolution;
            ex += resolution;
        }
    }
    
    //draws from top-left to bot-right
    function purple(sx, sy, ex, ey) {
        for (let i = 0; i <= 16; i++) {
            color = 'purple';
            draw(sx, sy, ex, ey);
            sx += resolution;
            ey += resolution;
        }
    }
    
    green(sx,sy,ex,ey);
    
    //set coords for purple
    for (let index = 0; index < 16; index++) {
        ex += resolution;
        ey -= resolution;
    }

    purple(sx, sy, ex, ey);
}

function drawrow(drawtimes) {
    for (let index = 0; index < drawtimes; index++) {
        segment();
        adjtocorner();
    }
}

function drawquadrant(drawtimes) {
    for (let index = 0; index < drawtimes; index++) {
        drawrow(drawtimes);
        adjrow();
    }
}

//horizontal quadrant
function adjhq() {
    sx += resolution * 16;
}

//adjust vertical quadrant
function adjvq() {
    sx = 0;
    sy = canvas.height / 2;
    ex = sx;
    ey = sy;
}

//adjust resolution & ey
function adjunit() {
    resolution = resolution / 2;
    ey += resolution * 16;
}

//adjust to tr corner of prev
function adjtocorner() {
    sx += resolution * 16;
    ey += resolution *16;
}

//adjust to new row within quadrant, ex & ey draw times resolution
function adjrow() {
    ex -= resolution * 16*drawtimes;
    ey += resolution * 16;
    sx -= resolution * 16*drawtimes;
    sy += resolution * 16;
}    



/////////////////////////////////////////////////////////////

//tl quadrant
segment();

//tr quadrant
drawtimes *= 2;

adjhq();

adjunit();

drawquadrant(drawtimes);

//bl quadrant

drawtimes *= 2;

adjvq();

adjunit();

drawquadrant(drawtimes);

//br quadrant

drawtimes *= 2;

sx = canvas.width / 2;
sy = canvas.height / 2;
ex = sx;
ey = sy;

adjunit();

drawquadrant(drawtimes);