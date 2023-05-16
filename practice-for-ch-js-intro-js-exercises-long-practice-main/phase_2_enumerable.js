// // Your code here
// Array.prototype.uniq = function() {
//   const new_arr = [this[0]];

//   for (let i = 1; i < this.length; i++) {
//       if (!new_arr.includes(this[i])) {
//           new_arr.push(this[i]);
//       };
//   };
//   return new_arr;
// };

Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  };
};




// console.log([3, 4, 5, 3, 4].myEach(logElement))

Array.prototype.myMap = function(callback) {
  const results = [];

  this.myEach(function(ele){
    results.push(callback(ele))
  })
  return results;
};

function logElement(el) {
  return (el + 2);
};

// console.log([3, 4, 5, 3, 4].myMap(logElement));

Array.prototype.myReduce = function(callback, ...starting) {
  let sum = 0;
  this.myEach(function(ele) {
    acc = sum;
    sum = callback(acc, ele);
  });
  return sum + starting;
};

console.log([1, 2, 3].myReduce(function(acc, el) {
  return acc + el;
}));