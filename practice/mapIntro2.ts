'use strict';
export { };

let map: Object = {};

map['978-1-60309-452-8'] = 'A Letter to Jo';
map['978-1-60309-459-7'] = 'Lupus';
map['978-1-60309-444-3'] = 'Red Panda and Moon Bear';
map['978-1-60309-461-0'] = 'The Lab';

let keys = Object.keys(map);
let values = keys.map(key => map[key]);

keys.forEach(function(element, index) {
  console.log(`${values[index]} (ISBN: ${element})`)
});

delete map['978-1-60309-444-3'];
delete map[keys[values.indexOf('The Lab')]];

map['978-1-60309-450-4'] = 'They Called Us Enemy';

// Object.defineProperty(map, 'ar', {
//   value: 'Why Did We Trust Him?'
// });