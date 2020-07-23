// Object Oriented Programming

// Prototypal Inheritance

const dog = {
  name: "Peanut",
  goodBoy: true,
  gender: "girl",
};

const dogTwo = {
  name: "Sanga",
  color: "crimson",
};

dogTwo.__proto__ = dog;

console.log(dog);
console.log(dogTwo);

console.log(dogTwo.goodBoy);

console.log(dogTwo.name);

// Make two objects and one object needs to inherit from the other object

const llama = {
  name: "Valiant",
  naughty: true,
  gender: "non-binary",
};

const llamaTwo = {
  name: "HeyBB",
  color: "puke",
};

llamaTwo.__proto__ = llama;

console.log(llama);
console.log(llamaTwo);

console.log(llamaTwo.naughty);
console.log(llamaTwo.name);

// Constructor Functions
function User(name) {
  // this
  this.name = name;

  // return this
}

let adam = new User("Adam");
let pete = new User("Pete");

console.log(adam.name);
console.log(pete.name);

function SC2Player(name, team, banelingBust) {
  this.name = name;
  this.team = team;
  this.banelingBust = banelingBust;
}

let TY = new SC2Player("TY", "Afreeca Freecs", false);
console.log(TY);
console.log(TY.name);

let Dark = new SC2Player("Dark", "Dragon Phoenix Gaming", true);
console.log(Dark);
console.log(Dark.name);

let Scarlett = new SC2Player("Scarlett", "Brave Star Gaming", true);
console.log(Scarlett);
console.log(Scarlett.name);
