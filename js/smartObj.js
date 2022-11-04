'use strict';
console.log('smartObj.js');

const stud1 = {
  name: 'James',
  mathMarks: [8, 9, 10, 5],
  year: 2,
  avg: function () {
    return this.mathMarks.reduce((total, sk, i, arr) => total + sk / arr.length, 0);
  },
  info: function () {
    console.log(`Studen name is ${this.name} he is in ${this.year} year`);
    console.log(`his math average is ${this.avg()}`);
  },
  addMathMark: function (newMark) {
    // validation
    if (typeof newMark !== 'number') return;
    this.mathMarks.push(newMark);
  },
};
const stud2 = {
  name: 'Jane',
  mathMarks: [10, 9, 10, 10],
  year: 3,
  avg: function () {
    return this.mathMarks.reduce((total, sk, i, arr) => total + sk / arr.length, 0);
  },
  info: function () {
    console.log(`Student name is ${this.name} he is in ${this.year} year`);
    console.log(`his math average is ${this.avg()}`);
  },
  addMathMark: function (newMark) {
    // validation
    if (typeof newMark !== 'number') return;
    this.mathMarks.push(newMark);
  },
};

// const stud1MathMarks = stud1.mathMarks.reduce((total, sk, i, arr) => total + sk / arr.length, 0);

const stud1MathMarks = stud1.avg();
// stud1.addMathMark(6);
stud1.addMathMark('6');
console.log('stud1MathMarks ===', stud1MathMarks);
stud1.info();
stud2.info();

// new Student("James", 2, [8, 9, 10, 5])
