class DogPark {
  constructor(name) {
    this.name = name;
    this.dogs = [];
  }

  addDog(dog) {
    this.dogs.push(dog);
  }

  removeDog(dog) {
    for (var i = 0; i < this.dogs.length; i++) {
      if (this.dogs[i] === dog) {
        this.dogs.splice(i, 1);
      }
    }
  }

}

module.exports = DogPark;
