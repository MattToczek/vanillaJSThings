let shoppingList = ['bread', 'milk', 'oranges'];

// let addItem = (item) => {
//     shoppingList.push(item);
// }

// addItem('pears');
// console.log(shoppingList);

// let removeItem = (item)=> {
//     item = item.toLowerCase();
//     for (let i = 0; i< shoppingList.length; i++) {
   
//       if(item == shoppingList[i]){
//           shoppingList.splice(i, 1)
//       }
    
//     }
// }

// removeItem('bread');

// console.log(shoppingList);

// let duplicateItem = (item, num) => {
//     item = item.toLowerCase();
//     let length = shoppingList.length /* creating a variable to stop infinate loop, due to increased list length */
//     for (let i = 0; i< length; i++) {
//         if(item == shoppingList[i]){
//             for (let j= 1; j <= num; j++) {
            
//                 shoppingList.push(item);
//             }
//         } else{
//             console.log(`Please add ${item} to your list before duplicating`);
//         }
        
//     }
//     console.log(shoppingList);
// }

// duplicateItem('bread', 2)


// // Activity 1

// let website = ['google', 'facebook', 'pintrest'];

// website.push('wikipedia', 'twitter');
// console.log(website);

// // Activity 2

// let classList =  [];
// let bookings = [];

// const bookClass = (name, className) => {
//     let booking =[];
//     booking.push(name, className);
//     classList.push(booking);
// }

// bookClass('matt', 'spin');
// bookClass('john', 'hiit');
// bookClass('tom', 'yoga');
// bookClass('barry', 'spin');
// bookClass('hannah', 'yoga');
// bookClass('sophie', 'spin');
// bookClass('emma', 'yoga');
// bookClass('john', 'yoga');
// bookClass('john', 'spin');
// bookClass('john', 'tabata');
// bookClass('john', 'pump');


// console.log(classList);

// const getBookings = (name) => {
//     bookings = []; /* resets array to blank */
//     for (let i = 0; i < classList.length; i++) { /* cycles through array */
        
//         if (classList[i][0] == name.toLowerCase()) {
//             bookings.push(classList[i]); /* populates bookings array with Joh's bookings */
//         }
        
//     }
//     console.log(bookings);
// }

// console.log('====================================================================')
// getBookings('john')

// const cancelBooking = (name, className) => {    
//     for (let i = 0; i < classList.length; i++) { /* cycles through array */
//         if(classList[i][0] == name && classList[i][1] == className){ /* validates booking exists */
//             classList.splice(i, 1); /* removes booking */
//         } else{
//             console.log('You are not booked on this course.')
//         }

//     }

// }

// cancelBooking('john', 'tabata');
// console.log(classList);

// let drinks = ['coke', 'dr pepper', 'lilt', 'ting'];
// let snacks = ['crisps', 'chocolate', 'sweets'];
// let fruit = ['apples', 'pear', 'cherries'];

// let mix = [...drinks, ...snacks, ...fruit];

// console.log(mix);

let musicList = ['donovan', 'elvis', 'abba']
                // 0          1        2

console.log(musicList);

musicList.push('Britney Spears')
console.log(musicList);

let a = musicList.slice(2); //slices off indexes from border between [1] & [2] leftward and stores to a
console.log(a);
console.log(musicList);

a = musicList.slice(1, 3); //slices off indexes from border between [0] & [1] leftward and [2] & [3] rightward and stores to a
console.log(a);
console.log(musicList);