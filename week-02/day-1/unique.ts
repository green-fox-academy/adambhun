//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once


//concept - use splice, if, and for loops;
//splice params:position(for index), 1


function unique(arr: number[]) {
    let uniarr: number[] = arr;
    let index: number = 0;
    let uniind: number = 0;
    //increment arr[]
    for (index; index < arr.length; index++) {
        //increment uniarr[]
        for (uniind; uniind < arr.length; ++uniind) {
            if (uniarr[uniind] === arr[index]) {
                uniarr.splice(uniind,1);
            }
        }       
    }
    //now it would return uniques only, but in as-is order
    return uniarr.sort(function(a,b){return a-b});
}

//  Example
console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]`


//this removes ALL non-unique values
/* function unique(arr: number[]) {
    let icurrent: number = 0;
    let icheck: number = 0;
    let uniarr: number[] = [];
    for (icurrent; icurrent < arr.length; icurrent++) {
        if (arr[icurrent] !== arr[icheck]) {
            uniarr.push(arr[icurrent]);
        }
    }
    return uniarr;
} */