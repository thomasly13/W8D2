// Your code here
Array.prototype.uniq = function() {
  const new_arr = [this[0]];

  for (let i = 1; i < this.length; i++) {
      if (!new_arr.includes(this[i])) {
          new_arr.push(this[i]);
      };
  };
  return new_arr;
};

Array.prototype.twoSum = function() {
  const sums = [];

  for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length; j++) {
          if (j > i && this[i] + this[j] === 0) {
              sums.push([i, j]);
          };
          
      };
  };

  return sums;
};


// console.log([-1, 0, 2, -2, 1].twoSum())

Array.prototype.transpose = function () {

  const transposed = Array.from(Array(this.length), () => new Array(this.length));

  for (let i =0; i < this.length; i++) {
      for (let j =0; j <this.length; j++) {
              transposed[i][j] = this[j][i];

      };

  };
  return transposed;
};

console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose())