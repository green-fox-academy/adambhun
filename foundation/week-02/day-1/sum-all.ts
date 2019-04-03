// -  Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `ai` to the console

let ai: number[] = [3, 4, 5, 6, 7];

let a: number = ai.reduce(function(accu, current){
    return accu += current;
});

console.log(a);