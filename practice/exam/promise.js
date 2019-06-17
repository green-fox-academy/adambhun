'use strict';

const asdf = () => new Promise((fulfill, reject) => {
  if (err) {
    reject('fail');
    
  } else {
  fulfill('success');
  }
});

function calling() {
  asdf
  .then(function(fulf){
    console.log(fulf);    
  })
  .reject(function(){
    console.log(reject);    
  })
}

calling();