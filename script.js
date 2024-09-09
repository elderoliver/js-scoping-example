'use strict';

// Examples how to use the Scope chain
/*function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);
  }

  if (birthYear >= 1981 && birthYear <= 1996) {
    var str = `Ops, you are a millenial, ${firstName}`;
  }

  //if I use var to declare this variable, I can log the str into the console.
  //because var declaration is not block scoping unlike let and const declarations
  console.log(str);

  printAge();
  return age;
}

const firstName = 'elder';

calcAge(1990);*/

// How to use the this keyword

console.log(this);

// On This example when we declare a regular function
// the this keyword is undefined
const calcAge = function (birthYear) {
  console.log(this);
  return 2024 - birthYear;
};

// on this other example it's the same.
function calcAge2(birthYear) {
  console.log(this);
  return 2024 - birthYear;
}

// but for arrow functions the this keyword
// gets the context for the parent object.
const calcAge3 = birthYear => {
  console.log(this);
  return 2024 - birthYear;
};

console.log(calcAge(1990));

console.log(calcAge2(1990));

console.log(calcAge3(1990));

const elder = {
  year: 1990,
  calcAge: function () {
    console.log(`Your age is ${2024 - this.year}`);
  },
};

const AnaPaula = {
  year: 1991,
};

elder.calcAge();

AnaPaula.calcAge = elder.calcAge;

AnaPaula.calcAge();

const elder2 = {
  name: 'Elder',
  year: 1990,
  calcAge: function () {
    console.log(`Your age is ${2024 - this.year}`);

    const isMilenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMilenial();
  },
  greet: () => {
    console.log(this.name);
  },
};

var name = 'Bla bla bla';

console.log(elder2.greet());

elder2.calcAge();
