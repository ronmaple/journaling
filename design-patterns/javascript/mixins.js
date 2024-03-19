// an object used to add functionality to other objects

// the "other" object
class Dog {
  constructor(name) {
    this.name = name;
  }
}

// mixin
const dogFunctionality = {
  bark: () => console.log("Woof!"),
  wagTail: () => console.log("Wagging my tail!"),
  play: () => console.log("Playing!"),
};

Object.assign(Dog.prototype, dogFunctionality);

// You can have mixins with its own inheritance
const animalFunctionality = {
  walk: () => console.log("Walking!"),
  sleep: () => console.log("Sleeping!"),
};
Object.assign(dogFunctionality, animalFunctionality);

// cons:
// adds unnecessary complexity to (React) components
// use HOC instead
// this can be bad practice -- can lead to prototype pollution
