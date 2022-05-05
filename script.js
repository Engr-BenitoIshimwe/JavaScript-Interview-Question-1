// Question 1: map vs forEach

// const arr = [2, 5, 3, 4, 7];

var arr = [2, 5, 3, 4, 7];

const mapResult = arr
  .map((ar) => {
    return ar + 2; // this will add 2 to each item of the array but (1) it doesn't change anything about the array
  })
  .filter(); // (2) You can chain stuff on map but forEach can't

const forEachResult = arr.forEach((ar) => {
  return ar + 2;
}); // This will not return anything

const forEachResult1 = arr.forEach((ar, i) => {
  arr[i] = ar + 3;
}); // This modifies the original array

console.log(mapResult, forEachResult, arr);

// Question 2: null vs undefined

/* 
Null is an actual value but undefined means that the variable is declared but it's not initialised  
*/

console.log(typeof null); // Object so this is an actual value
console.log(typeof undefined); // datatype

let a;

console.log(a); // undefined

let b = null;

console.log(b); // null

console.log(a); // not defined

console.log(null == undefined); // true because compares them without considering their datatypes
console.log(null === undefined); // false because it compares them by considering their datatypes

// Question 3: Explain Event Delegation

document.querySelector('#products').addEventListener('click', (event) => {
  console.log(event);

  if (event.target.tagName === 'LI') {
    window.location.href += '#' + event.target.id;
  } // Now when we click on this, this is going to route us to that page or like atleast have the 
    // product name of the url so if you click on this, we get this hash wallet so this is what event
    // delegation is without adding event listener to each specific list item we just added it to the 
    // parent and we are using it to click the other list items.
});

// Question 4: Flatten the Array

let arr = [
  [1, 2],
  [3, 4],
  [5, 6, [7, 8], 9],
  [10, 11, 12],
];

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] to get this result

let flattened = [].concat(...arr);

console.log(flattened);

console.log(arr.flat(2));

function customFlat(arr, depth = 1) {
  let result = [];
  arr.forEach((ar) => {
    if (Array.isArray(ar) && depth > 0) {
      result.push(...customFlat(ar, depth - 1));
    } else result.push(ar);
  });

  return result;
}

// 1,2,3,4

// [1, 2]

console.log(customFlat(arr, 2));

// Question 5: Projects Showcase (if any)

// Round 2

// Question 1: var vs let vs const

// let and const is block scoped while var are function scoped

// {
//   // var a = "hello"; // hello

//   let a = 'hello'; // not defined
//   const a = 'hello'; // not defined
// }

// console.log(a);

// {
//   const a = 'hello';
//   console.log(a); // hello

//   var a = 4;
//   var a = 46; // no error

//   let a = 4;
//   let a = 46; // has been initialise error

//   const a = 4;
//   const a = 46; // has been initialise error

//   var a = 5;
//   a = 10; // can be redeclared

//   let a = 5;
//   a = 10; // can be reinitialised

//   const a = 5;
//   a = 10; // cannot be redeclared and reinitialised

//   var a; // can be declared without a valuable

//   let a; // can be declared without a valuable

//   const a; // cannot be declared without a valuable

// }

/***************************************************
 
  B E N I T O  S C A N D I W E B  D E V E L O P E R
        BENITO SCANDIWEB DEVELOPER 
  B E N I T O  S C A N D I W E B  D E V E L O P E R

****************************************************/

// Question 2: setTimeout Output

function a() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, i * 1000); // setTimeout runs when the code has run successfully
  }
}

// i
// i
// i

// 3
// 3
// 3 so this is gonna be printed

a(); // 2 3

function a() {
  for (let i = 0; i < 3; i++) {
    // let is block scoped
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, i * 1000);
  }
}

// {
//   i = 0;
// }
// {
//   i = 1;
// }

a(); // 0 1 2 3

// Question 3: Explain Call, Apply and Bind

var person = {
  name: 'Benito Scandiweb Developer',
  hello: function (thing) {
    console.log(this.name + ' says hello ' + thing);
  },
};

person.hello('world'); // Benito Scandiweb Developer says Hello World

// call
var person = {
  name: 'Benito Scandiweb Developer',
  hello: function (thing) {
    console.log(this.name + ' says hello ' + thing);
  },
};

var alterEgo = {
  name: 'Benito Scandiweb Junior Developer',
};

person.hello.call(alterEgo, 'world');

// apply
var person = {
  name: 'Benito Scandiweb Developer',
  hello: function (thing) {
    console.log(this.name + ' says hello ' + thing);
  },
};

var alterEgo = {
  name: 'Benito Scandiweb Junior Web Developer',
};

person.hello.apply(alterEgo, ['world']);

// Bind
var person = {
  name: 'Benito Scandiweb Developer',
  hello: function (thing) {
    console.log(this.name + ' says hello ' + thing);
  },
};

var alterEgo = {
  name: 'Benito Scandiweb Remote Developer',
};

const newHello = person.hello.bind(alterEgo);

newHello('world');

// Question 4: Infinite Currying

// add(1)(2)...(n)()

// Question 5: Composition Polyfill

function addFive(a) {
  return a + 5;
}

function substractTwo(a) {
  return a - 2;
}

function multiplyFour(a) {
  return a * 4;
}

const compose = (...functions) => {
  return (args) => {
    return functions.reduceRight((arg, fn) => fn(arg), args);
  };
};

const evaluate = compose(addFive, substractTwo, multiplyFour);

console.log(evaluate(5)); // 23

// Question 6: Implement Promise.all

function showText(text, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, time);
  });
}

Promise.all([showText('hello', 1000), Promise.resolve('hi')]).then((value) =>
  console.log(value)
); // [hello, hi]
////////////////////////////
function showText(text, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, time);
  });
}

Promise.all([
  showText('hello', 1000),
  Promise.resolve('hi'),
  Promise.reject('bye'),
]).then((value) => console.log(value)); // if one promise fails then all of the promises are going to fail so we have to create it's polyfill

///////////////////////////////////
// What the interview wanted
function showText(text, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, time);
  });
}

function myPromiseAll(promises) {
  let result = [];
  return new Promise((resolve, reject) => {
    promises.forEach((p, index) => {
      p.then((res) => {
        result.push(res);
        if (index === promises.length - 1) {
          resolve(result);
        }
      }).catch((err) => reject(err));
    });
  });
}

myPromiseAll([
  showText('hello', 1000),
  Promise.resolve('hi'),
  // Promise.reject('bye'),
]).then((value) => console.log(value)); // hello, hi

// Round 3
// Question 2: Ways to center a div
// check in style.css

// Question 3: CSS Box Model
