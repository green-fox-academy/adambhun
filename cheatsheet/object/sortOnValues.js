'use strict';

var maxSpeed = {
  car: 300, 
  bike: 60, 
  motorbike: 200, 
  airplane: 1000,
  helicopter: 400, 
  rocket: 8 * 60 * 60
};
var sortable = [];
for (var vehicle in maxSpeed) {
  sortable.push([vehicle, maxSpeed[vehicle]]);
}

sortable.sort(function(a, b) {
  return a[1] - b[1];
});

let result = new Object;

let asdf = Object.keys(maxSpeed).sort(function(a,b){return maxSpeed[a] - maxSpeed[b]});

for (let index = 0; index < asdf.length; index++) {
  result[asdf[index]] = maxSpeed[asdf[index]];
}

console.log(result);