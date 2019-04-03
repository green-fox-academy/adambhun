// Write a recursive function that takes one parameter: n and counts down from n.

function counter(n:number) {
  if (n === 0) {
    console.log(0);
    return 0;
  } else {
    console.log(n);
    n--;
    return counter(n);
  }
}

counter(10);