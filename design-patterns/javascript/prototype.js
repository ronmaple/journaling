class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    return `Woof!`;
  }
}

// Dog.prototype.play = () => console.log("play");

class SuperDog extends Dog {
  constructor(name) {
    super(name); // inherit properties and methods from the parent class
  }
}

// also another way is to Object.create(dog)
/*
const dog = {
    bark() {

    }
}
*/
