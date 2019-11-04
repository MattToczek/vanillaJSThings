// const employee = new Class 
// {
//     constructor(name, posititon, yearsOfService, company)
//     {
//         this.name = name;
//         this.posititon = posititon;
//         this.yearsOfService = yearsOfService;
//         this.company = company;
//     }
// }



let person = {
    name: 'Matt',
    age: 29,
    sayHi : function () {
       console.log(`Hello, my name is ${this.name}`);
    }
}

let pet = {
    name: 'Jack',
    typeOfPet: 'Cat',
    age: 12,
    colour: 'Black',
    eat : function() {
        console.log(`${this.name} is eating`);
    },
    drink : function() {
        console.log(`${this.name} is drinking`);
    }
}

let food = {
    croissant: {    price: 2.5,
                    temp: 'hot'
                    },
    sandwich:  {    price: 4,
                    temp: 'cold'
                    },
    hotDog:    {    price: 4,
                    temp: 'hot'
                    },

}

let drinks = {
    coffee : {  price: 3.5,
                temp: 'hot'
                },

    coke: {     price: 1,
                temp: 'cold'
                },

    water: {    price: 1,
                temp: 'cold'
                },
    porto: {        price: 7.5,
                    region: "Portugal"
                },
            
    buckfast: {     price: 9.5,
                    region: "England"
                }
}

// let food = {
//     sandwich : 2.5,
//     cookie : 1.5,
//     croissant : 1.5
// }

let coffeeShop = {
    branch: 'Manchester',
    drinks: drinks,
    food: food
    }


    // let getPrice = (item, type) => {            //assumes that order is a drink unless food is specified in parameters
    //         type = type || 'drinks';
        
    //     console.log( coffeeShop[food][item].price   );
    // }


    let getPrice = (item, type) => {            
          if (type == 'food'){
                console.log( coffeeShop.food[item].price   )
          }
          else if(type == 'drinks'){
            console.log( coffeeShop.drinks[item].price   )
          }else {
              let options = Object.keys(coffeeShop)
              options = options.splice(1, options.length)
              console.log(`Please choose an existing catagory for your order. The options are: ${options}`);
          }


    }


    getPrice("buckfast")
    getPrice('hotDog', 'food')

// /* ========================================================================================================================================================================*/
// /* ========================================================================================================================================================================*/


// let movie = {
//     name: 'Terminator',
//     mainActor: 'Arnold',
//     actors: ['Michael Bain', 'Linda Hamilton'],
//     yearReleased: 1983,
//     revenue: 440,
//     showing: function(){
//         console.log(`${this.name} is playing at the cinema today.`)
//     },
//     filmInfo () {
//         console.log(`${this.name} starred ${this.mainActor} as lead and ${this.actors.join(' and ')} acted in supporting roles. ${this.name} was released in 
//         ${this.yearReleased} and has earned ${this.revenue} million dollars to date.`)
//     }
// }

// movie.mainActor = 'Arnold Schwarzneger'; //updates value
// movie.rating = 5; //adds new key:value pair to object

// movie.filmInfo();


// /* ========================================================================================================================================================================*/
// /* ========================================================================================================================================================================*/


// // const filmList = {                  //object containing catagorised films
// //     classics: ['Titanic', 'Saving Private Ryan', 'The Goonies', 'Ghostbusters', 'Mighty Ducks'],
// //     modern: ['Avengers', 'Transformers', 'Adams Family - Animated'],
// //     horror: ['Saw', 'The Shining', 'The Ring']

// // }

// // let allFilms = [];    
// //     let films = () => {             //trying to create list of all films from catagories in object
        
// //         for (let i = 0; i < Object.keys(filmList).length; i++) {
// //             let currentCat = Object.keys(filmList)[i]
            
// //             for (let i = 0; i < filmList[currentCat].length; i++) {
// //                 allFilms.push(filmList[currentCat][i]);
                
// //             }
            
// //         }
// //     }

// // let resp = false;

// // let filmCheck = (title,  cat) => {   
    

// //     for (let i = 0; i < filmList[cat].length; i++) {                                  //for loop
// //         if (filmList[cat][i].toLowerCase() == title.toLowerCase()){               //trying to create function with reference to object and keys
// //             resp = true;
// //             response(resp, title, i, cat)
// //         }

// //     }

// //     response(resp, title, null, cat);
// // }

// // function response(r, ti, index, ca) {
// //     if (r) {
// //         console.log(`Good choice, ${ti} is number ${index+1} in the list.`);
// //     } else {
// //         console.log(`Sorry, ${ti} isn't in ${ca}, please try another catagory.`);
// //     }
// // }




// // filmCheck('The Goonies', 'horror');

// // films();
// // console.log(allFilms);

// /* ========================================================================================================================================================================*/
// /* ========================================================================================================================================================================*/

// let doINeedAnAlarm = 
// {
//     weekendAlarm : 'no alarm needed',
//     weekDayAlarm : 'get up at 7am'
// }

// // let day = 'Monday';
// let alarm;

// let alarmsForTheWeek = {

// }

// const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

// let alarmCheck = (d) => {
//     for (let i = 0; i < 5; i++) {
       
//         if (d.toLowerCase() == days[i].toLowerCase()){
            
//             alarm = doINeedAnAlarm.weekDayAlarm;
//             return alarm
//         }
//         else {
//             alarm = doINeedAnAlarm.weekendAlarm;
//             return alarm
//         }
        
//     }
// }
// // console.log(alarmCheck(days[4]));

// for (let i = 0; i < days.length; i++) {         
//     let currentDay = days[i];
//     alarmsForTheWeek[currentDay] = (alarmCheck(currentDay));    //trying to cycle through array and alarms and produce an object with day:alarmstatus pairs.
// }

// console.log(alarmsForTheWeek);