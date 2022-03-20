"use strict";

// let a = 5,
//     b = a;

// b = b + 5;    

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

function copy (mainObj) {
    let objCopy = {}; 

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj [key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;

// console.log(newNumbers);
// console.log(numbers);

const add = {
    d: 17, 
    e: 20
};

const clone = Object.assign({}, add);

clone.d = 20;
console.log(clone);

const oldArray = ['a', 'b', 'c'];

const newArray = oldArray.slice();

newArray[1] = 'fff';
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'jjj', 'rutube'],
      blogs = ['worrr', 'ewewewew', 'sdsdsdsd'],
      internet = [...video, ...blogs, 'sa', 'fcb'];
      console.log(internet);

const q = {
    one: 1, 
    two: 2
};

const newObj = {...q};

// const copy = obj;

// copy.a = 10;
// console.log(obj);




















// const arr = [1, 2, 8, 4, 0];
// arr.sort(campareNum);
// console.log(arr); 

// function campareNum(a, b) {
//     return a - b;
// } 

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join());



// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// arr[99] = 3;

// console.log(arr.length);



// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//        border: 'black',
//        bg: 'red' 
//     },
//     makeTest: function () {
//         console.log('hello');
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);

// console.log(Object.keys(options).length);

// let counter = 0;

// console.log(options);

// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Svoistvo ${i} imeet znachenie ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Svoistvo ${key} imeet znachenie ${options[key]}`);
//         counter++;
//     }
// }

// console.log(counter);