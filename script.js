'use strict';

function calcAge(birthYear) {
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

calcAge(1990);
