"use strict";
console.log("movie.js");

class Movies {
  constructor(oname, oyear, odirector, obudget, oincome) {
    this.name = oname;
    this.year = oyear;
    this.director = odirector;
    this.budget = obudget;
    this.income = oincome;
  }

  getIntroduction() {
    return `Name ${this.name}, year ${this.year}, director ${this.director}`;
  }

  getProfit() {
    return `Profit ${this.income - this.budget}`;
  }
  getProfitTimes() {
    return `kiek kartu atsipirko filmas ${
      (this.income - this.budget) / this.budget
    }`;
  }
}

let movie1 = new Movies("inception", 2014, "Steven Speilberg", 50e6, 100e6);
let movie2 = new Movies("Avatar2", 2017, "Steven Speilberg", 236e6, 300e9);
let movie3 = new Movies("Terminator", 1999, "All known director", 35e6, 70e6);

console.log("Movies ===", movie1);

console.log("movie1.getIntroduction(); ===", movie1.getIntroduction());
console.log("  getProfit() ===", movie1.getProfit());
console.log("getProfitTimes() ===", movie2.getProfitTimes());

// # OOP Sukurti

// 1. sukurti klase User. Useris turi name, surname.

class User {
  constructor(objName, ObjSurname) {
    this.name = objName;
    this.surname = ObjSurname;
  }
  getEmail() {
    return `${this.name}@${this.surname}.lt`;
  }
}

// 2. Userui sukurti metoda kuris grazina emaila. emailas susideda is vardas@pavarde.lt

let user1 = new User("vardenis", "Ilgapavardenis");
console.log("user1 ===", user1);
console.log(user1.getEmail());
// ## Employee
// 3. Sukurti klase Employee. employee turi firstName, lastName, hourlyPay.
// Sukuriant nauja Employee sukurti jam papildoma savybe hoursWorked ir prilyginti ja 0.

class Employee {
  constructor(ofirstName, olastName, ohourlyPay, ohoursWorked) {
    this.firstName = ofirstName;
    this.lastName = olastName;
    this.hourlyPay = ohourlyPay;
    this.hoursWorked = 0;
  }
  work(ohoursWorked) {
    this.hoursWorked += ohoursWorked;
    console.log(`darbotuojas papildomai dirbo ${ohoursWorked} valandu`);
  }
  calcPay() {
    return `reikia sumoketi ${this.hoursWorked * this.hourlyPay} Euru`;
  }
  payForWork(ammountPayed) {
    this.hoursWorked = this.hoursWorked - ammountPayed / this.hourlyPay;
    console.log(
      `sumoketa ${ammountPayed} liko sumoketi ${
        this.hoursWorked * this.hourlyPay
      } Euru`
    );
  }
}

let employee1 = new Employee("Steponas", "Giedraitis", 8, 0);
// employee1.hoursWorked = 160;
// 4. Employee prideti metoda work() kuris prideda tiek valandu prie hoursWorked, kiek paduodam i argumenta.
employee1.work(10);
employee1.work(20);
console.log("employee1 ===", employee1);
// 5. sukurti metoda calcPay() kuris paskaiciuoja kiek darbuotojui priklauso pinigu uz isdirbtas valandas.
console.log("employee1.calcPay() ===", employee1.calcPay());
// 6. sukurti metoda payForWork() kuris grazina kiek pinigu sumoketi
employee1.payForWork(100);
employee1.payForWork(100);
employee1.work(100);
