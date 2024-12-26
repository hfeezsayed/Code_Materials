//With the apply() method, you can write a method that can be used on different objects.
//but difference is call method used seprated but apply method call as an array

// Call method example Start

const person = {
  name: "Hafeez",
  age: 29,
  personDetails: function () {
    console.log(this.name);
  },
};

const person1 = {
  name: "Manzar",
  age: 30,
};

person.personDetails.call(person1);

//Scenario 2 with outside function
let person = {
  name: "Hafeez",
  age: 28,
};

let personDetails = function () {
  console.log(this.name);
};

personDetails.call(person);

let person1 = {
  name: "Salman",
  age: 55,
};

personDetails.call(person1);

// Call method example End
