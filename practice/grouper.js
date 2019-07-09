"use strict";

//users szöveg array, groups csoprotok száma
function grouper(users, groupnum) {
  let groups = {};
  let size = Math.floor(users.length / groupnum);

  for (let index = 0; index < size * groupnum; index++) {
    groups[users[index]] = Math.floor(index / size) + 1;    
  }

  if (users.length % groupnum !== 0) {
    //determine number of extra users
    let extra = users.length - (groupnum * size);    
    //assign each extra to a group evenly
    for (let index = 1; index < extra+1; index++) {
      console.log(groupnum * size + index -1);
      
      groups[users[groupnum * size + index -1 ]] = index;            
    }
  }

  console.log(groups);
}

grouper(["sani", "tamas", "asdf", "ioupo"], 3);

grouper(["sani", "tamas", "asdf", "kecske", "oiu", "ihnb", "hblko", "biukl"], 3);
