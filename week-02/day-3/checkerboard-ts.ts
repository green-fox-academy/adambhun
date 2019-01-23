'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.

//x = rect size
//every second switch
//go hor, check if new line

function drawhorline(x: number) {
    //draw from here
    let xc = 0;
    let yc = 0;
    let i = 0;
    //make the rest run x times
    for (let index = 0; index < 20; index++) 
        {
    for (i; i < canvas.width+1; i += x) {
    //check if second then draw horizontally
        if(i === canvas.width) {
            yc += x;
            i = 0;
        }
        if(i / x % 2 === 0){
            ctx.fillRect(xc, yc, x, x);
            ctx.fillStyle = 'white';
            xc += x;
        }else {
            ctx.fillRect(xc, yc, x, x);
            ctx.fillStyle = 'black';
            xc += x;
        }
        }
    }
}


drawhorline(100);