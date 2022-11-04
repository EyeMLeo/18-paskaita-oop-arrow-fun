class Student {
  // constructor vyksta sukuriant nauja objekta su new
  constructor(argName, argYear, argHomeTown) {
    console.log("student created");
    this.name = argName;
    this.year = argYear;
    this.town = argHomeTown;
    this.printStudent();
    this.courses = ["english"];
  }

  sayHi() {
    // sudentas iskonsolina ir pasisako apie save.
    /// sveiki as James is London ir esu 2 kurse
    const helloString = `Sveiki as ${this.name} is ${this.town} ir esu ${this.year} kurse`;
    console.log(helloString);
    return helloString;
  }

  printStudent() {
    const liEl = document.createElement("li");
    liEl.textContent = this.sayHi();
    studsEl.append(liEl);
  }

  // addCourse()
  addCourse(courseAdded) {
    this.courses.push(courseAdded);
  }

  // removeCourse() -
  removeCourse(courseIWantToRemove) {
    if (this.courses.includes(courseIWantToRemove)) {
      console.log(`pasalinu ${courseIWantToRemove}`);
      this.courses = this.courses.filter((el) => el !== courseIWantToRemove);
    } else {
      console.log(`nerasta klases ${courseIWantToRemove} nera ko trinti`);
    }
  }
}
// pasitikrinti ar yra toks dalykas kursuose

// jei yra pasalinam ir pransam su console

// jei nera pranesam kad tokio nera

const studsEl = document.getElementById("studs");

const st1 = new Student("James", 2, "Lodon");
// sukurti metoda addCourse() kuris prides viena kursa pries studento esamu
// st1.addCourse('Math');

const st2 = new Student("Jane", 3, "NY");
// st1.printStudent();
// st2.printStudent();
st1.sayHi();
st1.addCourse("maths");
// const st2 = new Student();
console.log("st1 ===", st1);
// console.log('st2 ===', st2);
st1.removeCourse("maths");
console.log("st1 ===", st1);
// sukurti metoda addCourse() kuris prides viena kursa pries studento esamu
// st1.addCourse('Math');
