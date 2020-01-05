class Dog {
  constructor(dogInfo) {
    this.name = dogInfo.name;
    this.breed = dogInfo.breed;
    this.energy = 3;
    this.hungry = false;
    this.toys = [];
    this.friends = [];
    this.inDogPark = false;
  }

  getToy(toy) {
    this.toys.push(toy);
  }

  findSqueakyToys() {
    var squeakyToys = [];
    for (var i = 0; i < this.toys.length; i++) {
      if (this.toys[i].squeaky) {
        squeakyToys.push(this.toys[i]);
      }
    }
    return squeakyToys;
  }

  play() {
    this.energy -= 1;

    if (this.energy < 1) {
      this.hungry = true;
    }
  }

  eat() {
    if (this.hungry) {
      this.hungry = false;
    } else {
      return `I'm not ready to eat!`;
    }
  }

  makeFriends(friend) {
    this.friends.push(friend);
  }

  findFriendsToPlayWith() {
    var playfulFriends = [];

    for (var i = 0; i < this.friends.length; i++) {
      if (this.friends[i].energy > 0) {
        playfulFriends.push(this.friends[i]);
      }
    }

    return playfulFriends;
  }

  enterDogPark(park) {
    this.inDogPark = true;
    park.addDog(this);
  }

  leaveDogPark(park) {
    this.inDogPark = false;
    park.removeDog(this);
  }

}

module.exports = Dog;
