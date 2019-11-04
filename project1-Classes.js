class Players {
    constructor(name, sport, yearsExp, retire = 0) {
        this.name = name;
        this.sport = sport;
        this.yearsExp = yearsExp;
        this.retire = retire;
        this.endOfCareer

   }
   
   info(){
       if (this.retire > 0){
           this.endOfCareer = `${this.name} retired in ${this.retire}`
       }
       else{
            this.endOfCareer = `${this.name} is still a ${this.sport}`
       }
       console.log(`${this.name} had a ${this.yearsExp} year long career as a ${this.sport}. ${this.endOfCareer}`);
   }
}

class Golf extends Players {
    constructor(name, sport, yearsExp, handicap, retire = 0){
        super(name, sport, yearsExp, retire);       //indicates that it inherrits values from Player Class
        this.handicap = handicap;
    }

    playGolf() {
        console.log(`${this.name} knows how to play golf`);
    }
}

class Basketball extends Players {
    constructor(name, sport, yearsExp, shirtNumber, retire = 0){
        super(name, sport, yearsExp, retire)
        this.shirtNumber = shirtNumber;
    }
    slamDunk() {
        console.log (`${this.name} knows how to slam dunk.`)
    }
}

const koby = new Basketball('Koby Bryant', 'Basketballer', 20, 8);
koby.slamDunk()
koby.info()

const tigerWoods = new Golf('Tiger Woods', 'Golfer', 20, -5)
tigerWoods.playGolf()
tigerWoods.info()


// const mikeTyson = new Players('Mike Tyson', 'Boxer', 35, 2005)
// const cristianoRonaldo = new Players('Christiano Ronaldo', 'Footballer', 18)

// mikeTyson.info()
// cristianoRonaldo.info()

class Pokémon {
    constructor (name, type, hp, attack){
        this.name = name;
        this.type = type;
        this.hp = hp;
        this.attack = attack
        this.food
    }
    eat(){
        if (this.type.toLowerCase() =='electric'){
            this.food = 'batteries';
        }
        else if (this.type.toLowerCase() == 'water'){
            this.food = 'fish';
        }
        else if (this.type.toLowerCase() == 'fire'){
            this.food = 'coal';
        }
        else if (this.type.toLowerCase() == 'earth'){
            this.food = 'plants';
        }
        else{
            this.food.toLowerCase() == 'unknown substances';
        }
        console.log(`${this.name} gets its nutrition from ${this.food}`)
    }
    
}

let pikachu = new Pokémon ('Pikachu', 'electric', 100, 'shock')

// pikachu.eat();

// let example  = 'true'

// if(typeof example == 'string'){
//     console.log('done');
    
// }