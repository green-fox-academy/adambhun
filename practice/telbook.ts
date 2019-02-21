'use strict';
export { };

let map: Object = {};

map['William A.Lathan']= '405-709-1865';
map['John K.Miller']= '402-247-8568';
map['Hortensia E.Foster']= '606-481-6467';
map['Amanda D.Newland']= '319-243-5613';
map['Brooke P.Askew']= '307-687-2982';

function show(params:Object) {
  let keys: string[] = Object.keys(params);
  let values: string[] = keys.map(value => map[value]);
  console.log(map['John K.Miller']);
  console.log(keys[values.indexOf('307-687-2982')]);
  
}
show(map);
