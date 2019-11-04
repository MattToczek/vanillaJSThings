//Write a simple function which logs “Hello Code
// Nation” to the console.
// Then write a higher order function which will run our
// simple function five times, even though you only call
// it one time.

let hello = () => {
    console.log('Hello Code Nation');
    
}

let timesFive = (fn)=> {
    for (let i = 0; i < 5; i++) {
        fn();
        
    }
}

timesFive(hello);

// The array method .map is an example of a higher
// order function.
// Declare a variable with five numbers, then use .map
// to iterate through the array and multiply each array
// item by 3.

let array = [1, 2, 3, 4, 5];


let func = (no)=> { //function to times input by 3
    return no*3;
}

let newArray = array.map(func()); //.map() iteerates though each val and applies func to it

console.log(newArray);

// Test this function to make
// sure it works by passing a
// number to the doMaths
// function, then passing a
// number and one of the four
// maths functions, to the
// returned function.

const add = (a,b) => {
    return a+b;
    }
    const subtract = (a,b) => {
    return a - b;
    }
    const multiply = (a,b) => {
    return a*b;
    }
    const divide = (a,b) => {
    return a/b;
    }
    const doMaths = (num1) => {
    return (num2, fn) => {
    return fn(num1, num2);
    }
    }

let funct = doMaths(3);
console.log(funct(3, divide));