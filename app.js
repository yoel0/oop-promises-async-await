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

// Make 3 new variables with that constructor function

function SC2Player(name, team, banelingBust) {
  this.name = name;
  this.team = team;
  this.banelingBust = banelingBust;
  this.intro = function () {
    console.log("Hi, my name is " + this.name);
  };
}

let DRG = new SC2Player("DongRaeGu", "Afreeca Freecs", true);
console.log(DRG);
console.log(DRG.name);

let TY = new SC2Player("TY", "Afreeca Freecs", false);
console.log(TY);
console.log(TY.name);

let Dark = new SC2Player("Dark", "Dragon Phoenix Gaming", true);
console.log(Dark);
console.log(Dark.name);

let Scarlett = new SC2Player("Scarlett", "Brave Star Gaming", true);
console.log(Scarlett);
console.log(Scarlett.name);

DRG.intro();
TY.intro();
Dark.intro();
Scarlett.intro();

// Class
class Car {
  constructor(year, make, model, color) {
    this.name = year;
    this.make = make;
    this.model = model;
    this.color - color;
  }

  drive() {
    console.log("vroom");
  }
}

let tesla = new Car(2020, "Tesla", "Model Y", "Sapphire");

console.log(tesla);
//tesla.drive();
//tesla.intro();

class GithubProfile {
  constructor(username, name, url) {
    this.username = username;
    this.name = name;
    this.url = url;
  }
  intro() {
    console.log(`${this.name} and my username is @${this.username}`);
  }
}

// https://api.github.com/users/ahonore42

fetch("https://api.github.com/users/ahonore42")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let githubURL = data.url;
    let githubUsername = data.login;
    let githubName = data.name;

    let adam = new GithubProfile(githubUsername, githubName, githubURL);
    console.log(adam);

    adam.intro();
  });

let isMomHappy = false;

// Promise
// let willIGetNewPhone = new Promise(
//     function (resolve, reject) {
//         if (isMomHappy) {
//             let phone = {
//                 brand: 'Samsung',
//                 color: 'black'
//             };
//             resolve(phone); // fulfilled
//         } else {
//             // let reason = new Error('mom is not happy');
//             reject("Mom is not happy"); // reject
//         }

//     }
// );

let willIGetNewPhone = new Promise((resolve, reject) => {
  if (isMomHappy) {
    const phone = {
      brand: "iPhone",
      color: "red",
    };
    resolve(phone);
  } else {
    reject("No phone");
  }
});

// console.log(willIGetNewPhone);
willIGetNewPhone.then((result) => {
  console.log(result);
});
