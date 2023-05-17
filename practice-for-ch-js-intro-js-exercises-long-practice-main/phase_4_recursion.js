const range = function(start, end) {
    if (start === end) {
        return [start];
    };
    arr = range(start, end - 1);
    arr.push(end);
    return arr;
};

// console.log(range(0,3));

const sumRec = function(arr) {
    if (arr.length === 1) {
        return arr[0];
    };

    let add = arr.pop();
    return sumRec(arr) + add;
};



const exponent = function(base, exp) {
    if (exp===0) {
        return 1;
    };

    if (exp===1) {
        return base;
    };

    return exponent(base, exp - 1) * base;
};



const fibonacci  = function(n) {
    if ( n === 1) {
        return [1];
    };

    if ( n === 2) {
        return [1, 1];
    };

    arr = fibonacci(n-1);
    arr.push(arr[arr.length -1] + arr[arr.length -2]);
    return arr;
};


const deepDup = function(arr) {
    let dupe = [];
   
    for (let i = 0; i < arr.length; i++) {

        if (Array.isArray(arr[i])) {
            let arr1 = deepDup(arr[i]);
            dupe.push(arr1);
            
        }
        else {
            
            dupe.push(arr[i]);
        };
    };
    return dupe;
};




const bsearch = function(arr, target) {
    if (arr.length <= 1 && arr[0] !== target) {
        return null;
    };

    let mid = arr.length/2;

    if (arr[mid]=== target) {
        return mid;
    };
    let left = arr.slice(0, mid);
    let right = arr.slice(mid + 1, arr.length);

    if (arr[mid] > target) {
        return bsearch(left, target);
    }
    else {
        let stack = bsearch(right, target);
        if (stack !== null) {
            return stack + mid + 1;
        };
        // else {
        // return null;
        // };
     
    };


};

console.log(bsearch([1, 2, 4, 6 , 8, 9], 1));