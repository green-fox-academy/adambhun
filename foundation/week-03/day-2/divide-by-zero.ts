import { error } from "util";

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function div(param) {
    if (param === 0) {
        throw new error('fail');
    }
    try {
        console.log(10 / param);
    }
    catch (error) {
        console.log(error);
    }
}

div(0);