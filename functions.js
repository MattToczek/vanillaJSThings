

//Declaring a function as a constant
const basket1 = function(num1, num2) {
    return num1 + num2;
}
   

const basket2 = function(num1, num2, num3) {
    return num1 + num2 + num3;
    
}

basket1(2, 4);

let totalShopping = basket1(2, 4) + basket2(1, 1, 2);

console.log(totalShopping);

const basket3 = (fruit ) => {
    console.log(`I have some ${fruit} in my basket`);   
}

basket3("pears");





let order = [];

let subSandwich = (top1, top2, top3, top4,top5) => {
    
    order.push(top1, top2, top3, top4, top5)
}

subSandwich('tomato', 'cheese', 'ham', 'lettuce');
console.log(order);


let test = (num, str) => { 
    num = num || 5;
    str = str || 'apples'   // sets default values (if not specified, when called)

    return `I have ${num} ${str}.`;
}

let sent = test();

console.log(sent); // 'I have 5 apples.'

let statement = (num = 5, str = 'apples') => {   // sets default values (if not specified, when called)

    return `I have ${num} ${str}.`;
}

let statement = test();

console.log(sent); // 'I have 5 apples.'