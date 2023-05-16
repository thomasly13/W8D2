// Your code here

Array.prototype.bubbleSort = function () {
 
    let sorted = false;
    while (sorted === false) {
        sorted = true;
        for (i = 0; i < this.length; i++) {
            if (this[i] > this[i+1]) {
                let temp = this[i]
                this[i] = this[i+1]
                this[i+1] = temp
                sorted = false;
            };
        };
    
    };
    return this;
};

// console.log([0, 3, 8, 6, 9, 2].bubbleSort());

String.prototype.substrings = function() {
    const substrings = [];
    for (let i = 0; i < this.length; i++) {
        for (let j = i+1; j < this.length + 1; j++ ) {
            substrings.push(this.slice(i, j))
        };
    };
    return substrings;
};

console.log(('paulo').substrings());