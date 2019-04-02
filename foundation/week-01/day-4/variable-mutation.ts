'use strict';

let a: number = 3;
// make it bigger by 10
a = a+10;

console.log(a);

let b: number = 100;
// make it smaller by 7
b = b-7;

console.log(b);

let c: number = 44;
// double c's value
c = c*2;

console.log(c);

let d: number = 125;
// divide d's value by 5
d = d/5;

console.log(d);

let e: number = 8;
// what's the cube of e's value?
e = e**3;

console.log(e);

let f1: number = 123;
let f2: number = 345;
// tell if f1 is bigger than f2 (as a boolean)
let grtrthan: boolean;
if(f1>f2){
    grtrthan = true;
}else{grtrthan = false;
}
console.log(grtrthan);

let g1: number = 350;
let g2: number = 200;
// tell if the double of g2 is bigger than g1 (pras a boolean)
let bggr2x: boolean;
if(g2*2>g1){
    bggr2x = true;
}else{bggr2x = false;
}
console.log(bggr2x);

let h: number = 1357988018575474;
// tell if 11 is a divisor of h (as a boolean)
let div11: boolean;
if(h%11==0){
    div11 = true;
}else{div11 = false;
}
console.log(div11);

let i1: number = 10;
let i2: number = 3;
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)
let hghr: boolean;
if(i1>i2**2 && i1<i2**3){
    hghr = true;
}else{hghr = false;
}
console.log(hghr);

let j: number = 1521;
// tell if j is divisible by 3 or 5 (as a boolean)
let div35: boolean;
if(j % 3 == 0 || j % 5 == 0){
    div35 = true;
}else{div35 = false;
}
console.log(div35);

let k: string = 'Apple';
// fill the k variable with its content 4 times
let i: number;
let kplchldr: string = k;
for(i=0; i<4; i++){
    k = k.concat(kplchldr);
}

console.log(k);