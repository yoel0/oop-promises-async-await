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
