// class People {
//     constructor(name, address, phone){
//         this.name = name,
//         this.address = address,
//         this.phone = phone
//     }

//     getDetails(){
//         return `Name: ${this.name} / Address: ${this.address} / Phone: ${this.phone}`
//     }
// }

// let person1 = new People('John', 'Manchester', 12334)

// let person2 = new People('Holly','Liverpool',432432)

// // console.log(person2.getDetails());

// class Employees extends People{
//     constructor(name, address, phone, salary){
//         super(name, address, phone)
//         this.salary = salary;
//     }

//     employeeWageInfo(){
//         return `${this.name} -> ${this.salary}`
//     }
// }


let PersonP = function(nm, id) {
    this.name = nm;
    this.id = id;

}

PersonP.prototype.getDetails = function() {
    return `Name:${this.name} / Id: ${this.id}`
}

let fred = new PersonP('Fred', 321);
console.log(fred.getDetails(), fred.name);


let EmployeeP = function(nm, id, salary){
    PersonP.call(this, nm, id);
    this.salary = salary;
};
EmployeeP.prototype=Object.create(PersonP.prototype);

EmployeeP.prototype.employeeWageInfo = function(){
    return `${this.name} -> ${this.salary}`
}

let jo = new EmployeeP('Jo', 1, 10000);

console.log(jo.getDetails(), jo.name);
console.log(jo.employeeWageInfo());


/* ============================================================================================ */
/* ============================================================================================ */

// Challenge - convert classes to prototypes

// class Animal{
//     constructor(name){
//         this._name = name;
//         this._hunger = 100;
//         this._thirst = 100;
//     }
//     get name(){
//         return this._name;
//     }
//     get hunger(){
//         return this._hunger;
//     }
//     get thirst(){
//         return this._thirst;
//     }
//     eat(){
//         this._hunger--;
//     }
//     drink(){
//         this.thirst--;
//     }
//     }

let AnimalP = function (name, hunger, thirst){
    this._name = name;
    this._hunger = 100;
    this._thirst = 100;

    // AnimalP.__defineGetter__(name, function(){
    //     return this._name;
    // });
    // AnimalP.__defineGetter__(hunger, function() {
    //     return this._hunger;
    // });
    // AnimalP.__defineGetter__(thirst, function(){
    //     return this._thirst;
    // });
}

AnimalP.prototype.name = function() {
    return this._name;
}

AnimalP.prototype.hunger = function() {
    return this._hunger;
}

AnimalP.prototype.thirst = function() {
    return this._thirst;
}

AnimalP.prototype.eat = function() {
    this._hunger--;
}

AnimalP.prototype.drink = function() {
    this._thirst--;
}


    

    // class Bunny extends Animal {
    //     constructor(name, lovesCarrot, favFood){
    //         super(name);
    //         this._lovesCarrot = lovesCarrot;
    //         this._favFood = favFood;
    //     }
    //     get lovesCarrots(){
    //         return this._lovesCarrot;
    //     }
    //     get favFood(){
    //         return this._favFood;
    //     }
    //     }
    //     const rosie = new Bunny(
    //         "Rosie",
    //         true,
    //         ["basil", "rockets", "broccoli"]
    //     );

    let BunnyP = function(name, lovesCarrot, favFood){
        AnimalP.call(this, name)
        this._lovesCarrot = lovesCarrot;
        this._favFood = favFood;
        
        // BunnyP.__defineGetter__(lovesCarrot, function(){
        //     return this._lovesCarrot;
        // });

        // BunnyP.__defineGetter__(favFood, function(){
        //         return this._favFood;
    
        // })

    }

    BunnyP.prototype=Object.create(AnimalP.prototype);

    BunnyP.prototype.lovesCarrot = function(){
        return this._lovesCarrot;
    }

    BunnyP.prototype.favFood = function(){
        return this._favFood;
    }

    const rosie = new BunnyP(
                "Rosie",
                true,
                ["basil", "rockets", "broccoli"]
            );

   console.log(Object.keys(rosie));
  
   console.log(rosie.lovesCarrot());


/* ============================================================================================ */
/* ============================================================================================ */

// Challenge 2 - continued - convert classes to prototypes
