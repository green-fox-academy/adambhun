// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array


let matrix: number[][] = [];
//matrix length
let out: number = 4;
//inner lenght
let inner: number = 4;

let i: number = 0;

//multiply dimension lengths
for (let index = 0; index < out; index++) {
    matrix.push([]);
    for (i; i < inner; i++) {
        //push 1 @ num of index
        let p: number;
        if (index === i) {
            p = 1;
        }else {
            p = 0;
        }
        matrix[index].push(p);
    }
    i = 0;
}

console.log(matrix);