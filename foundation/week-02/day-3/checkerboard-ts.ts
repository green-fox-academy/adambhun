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
    let index = 0;
    //make the rest run x times
    for (index; index < 20; index++) 
        {
            for (let i = 0; i < canvas.width; i += x) {
                yc += x;
                i = 0;
            } 
            //check if second then draw horizontally
        if(index / x % 2 === 0){
            ctx.fillStyle = 'red';
            ctx.fillRect(xc, yc, x, x);
            xc += x;
        }else {
            ctx.fillStyle = 'black';
            ctx.fillRect(xc, yc, x, x);
            xc += x;
            }
        }
    yc += x;
}

drawhorline(100);