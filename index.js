// Question 2: Implicit and Explicit Binding

var obj = {
  name: 'Piyush',
  display: function () {
    console.log(this.name);
  },
};

var obj1 = {
  name: 'ABC',
};

obj.display(); // Piyush
// obj.display.call(obj1); // ABC

// 2nd version
var obj = {
  name: 'Piyush',
  display: () => {
    console.log(this.name);
  },
};

var obj1 = {
  name: 'ABC',
};

obj.display.call(obj1); // Nothing printed

// Question 3: Implement Caching/Memoize function

function myMemoize(fn, context) {
  const res = {};
  return function (...args) {
    var argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }
    return res[argsCache]; // it has been memoize to almost the same period of time
  };
}

const clumsyProduct = (num1, num2) => {
  for (let i = 1; i <= 100000000; i++) {}
  return num1 * num2;
};

const memoizedClumzyProduct = myMemoize(clumsyProduct);

console.time('First call');
console.log(memoizedClumzyProduct(9467, 7649));
console.timeEnd('First call');

console.time('Second call');
console.log(memoizedClumzyProduct(9467, 7649)); // this function takes more time to execute
console.timeEnd('Second call');

// 72413083
// First call: 47.67578125 ms
// 72413083
// Second call: 0.052001953125 ms

// Question 4: Output Based Question on Event loop

console.log('a');
setTimeout(() => console.log('set'), 0);
Promise.resolve(() => console.log('pro')).then((res) => res());
console.log('b');

// a
// b
// pro
// set

// jsv9000.app

// Task Queue(setTimeout)
// Microtask Queue(Promise)
// Call Stack
// Event loop

// Question 5: Infinite Currying

function add(a) {
  return function (b) {
    return function () {
      return a + b;
    };
  };
}

console.log(add(5)(2)()); // 7

/////////////////////

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

console.log(add(5)(2)()); // 7

// Question 6: Implement this code

const calc = {
  total: 0,
  add(a) {
    this.total += a;
    return this; // We need to return this whole object only then we are going to access other functions from this object
  },
  multiply(a) {
    this.total *= a;
    return this;
  },
  subtract(a) {
    this.total -= a;
    return this;
  },
};

const result = calc.add(10).multiply(5).subtract(30).add(10);
console.log(result.total);
