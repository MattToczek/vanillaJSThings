class Cars {
    constructor(regnum){
        this._regnum = regnum;
        this._hours = 0;
        this._charge = 0.00;
    }
    plusHour(){
        this._hours++;
        this._charge += 1.50;
    }

}

class Staff extends Cars {
    constructor(regnum, staffNo, credits){
        super(regnum);
        this._staffNo = staffNo;
        this._credits = credits;
        this._hours = 0;
        this._charge = 0.00;

    }
    

    minusCredits(){
                //2        < 5
           if(this._credits < this._hours){
               for (let i = 0; i < this._credits; i++) {
                   this._charge -=1.5;
               }
               this._credits = 0;
           } else {
               this._charge = 0;
               this._credits -= this._hours
           }

    }
}

 

const pay = (reg, hr, staffNo = 0, cred = 0 )  => {
    if (staffNo != 0){        //staff car 1234    2
        const staffCar = new Staff(reg, staffNo, cred)
                           //5
        for (let i = 0; i < hr; i++) {
            staffCar.plusHour();
            //this_hours = 5;
            //this_charge = 7.5
        }

        staffCar.minusCredits();

        console.log(`You owe £${staffCar._charge} for your ${staffCar._hours} hours of parking.`);
      
        
    } else{
        const car = new Cars(reg);

        for (let i = 0; i < hr; i++) {
            car.plusHour();
        }
        console.log(`You owe £${car._charge} for your ${car._hours} hours of parking.`);

    }
    
    
}

pay("my Car", 10);

pay('staff car', 5, 1234, 2);

pay ('staff Car 2', 10, 123, 75)


/*========================================================================================================================================================================================*/
/*========================================================================================================================================================================================*/

class Pet {
    constructor(type, name, thirstRate){
        this.type = type;
        this.name = name;
        this.boredom = 0;
        this.thirst = 0;
        this.hunger = 0;
        this.thirstRate = thirstRate || 5;  //allows the setting of a thirstRate, depending on the animal
    }


    promFunc () {                           //creates a promise with a 1 second delay that adjusts the thirst by thirst rate and increases hunger and boredom by 1
        console.log("starting counter");
        return new Promise(resolve => {
          setTimeout(() =>{
            resolve('done');
            this.thirst += this.thirstRate;
            this.hunger += 1;
            this.boredom += 1;
            console.log("counter done");
            console.log(this.thirst);
          }, 1000);
        });
      };
      
      
        async count(){                      //calls promise asyncronously every second until thirst hits 100
            while (this.thirst < 100) {
                await cat.promFunc()
            }    
            console.log(`${this.name} died of thirst.`)  
    }

    revive() {                              //resets thirst to 0 and starts count() again
        this.thirst = 0;
        this.count()
    }
}



const cat = new Pet('Cat', 'Kitty', 5) 




cat.count();

let revFunc = () => {                           //trying to revive cat whilst the timer is running (throwing error)
    console.log("starting revive in 5s");
    return new Promise(resolve => {
        setTimeout(() =>{
            resolve('done');
            cat.revive();
            console.log("counter done");  
            }, 5000);
    });
};

async function revcount(){                      
    await cat.revFunc();
}    


revcount();
