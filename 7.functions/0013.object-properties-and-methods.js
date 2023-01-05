function reducecurrentspeed () {
    car.currentspeed = car.currentspeed - 10;
}
const car = {
    // properties
    name : "BMW",
    year : 2021,
    Isrunning : false,
    currentspeed : 0,

    // Methods ()
    startEngine : function () {
    car.Isrunning = true
    },
    stopEngine : function () {
        car.Isrunning = false
    },

    increasespeed : () => {
        car.currentspeed = car.currentspeed + 10; 
    },
    decreasespeed : reducecurrentspeed,
    printdetails : () => {
        console.log(`
        car detail info
        ----------------------------------------------------- 
        name : ${car.name},
        year : ${car.year},
        running : ${car.Isrunning},
        speed : ${car.currentspeed}
        `)
    }

}

console.log (`car,detail`,car)
car.printdetails();

car.startEngine();
car.printdetails();

car.increasespeed();
car.increasespeed();
car.increasespeed();
car.printdetails();

car.decreasespeed();
car.decreasespeed();
car.printdetails();


// Answer
/*
car,detail {
  name: 'BMW',
  year: 2021,
  Isrunning: false,
  currentspeed: 0,
  startEngine: [Function: startEngine],
  stopEngine: [Function: stopEngine],
  increasespeed: [Function: increasespeed],
  decreasespeed: [Function: reducecurrentspeed],
  printdetails: [Function: printdetails]
}

        car detail info
        -----------------------------------------------------
        name : BMW,
        year : 2021,
        running : false,
        speed : 0


        car detail info
        -----------------------------------------------------
        name : BMW,
        year : 2021,
        running : true,
        speed : 0


        car detail info
        -----------------------------------------------------
        name : BMW,
        year : 2021,
        running : true,
        speed : 30


        car detail info
        -----------------------------------------------------
        name : BMW,
        year : 2021,
        running : true,
        speed : 10 
        */