var assert = require('chai').assert;
var DogPark = require('./dog-park');
var Dog = require('./dog');

describe('Dog Park', function() {

  it('should have a name', function() {
    var cherryCreek = new DogPark("Cherry Creek");
    var westminster = new DogPark("Westminster");

    assert.equal(cherryCreek.name, "Cherry Creek");
    assert.equal(westminster.name, "Westminster");
  });

  it('should start with no dogs', function() {
    var cherryCreek = new DogPark("Cherry Creek");

    assert.deepEqual(cherryCreek.dogs, []);
  });

  it('should be able to add a dog', function() {
    var cherryCreek = new DogPark("Cherry Creek");
    var sophie = new Dog("Sophie", "Bernadoodle");

    cherryCreek.addDog(sophie);

    assert.deepEqual(cherryCreek.dogs, [sophie]);
  });

  it('should be able to add multiple dogs', function() {
    var cherryCreek = new DogPark("Cherry Creek");
    var sophie = new Dog("Sophie", "Bernadoodle");
    var toph = new Dog("Toph", "Goldendoodle");
    var sodie = new Dog("Sodie", "Shih-Tzu");

    cherryCreek.addDog(sophie);
    cherryCreek.addDog(toph);
    cherryCreek.addDog(sodie);

    assert.deepEqual(cherryCreek.dogs, [sophie, toph, sodie]);
  });

  it('should be able to remove a dog', function() {
    var cherryCreek = new DogPark("Cherry Creek");
    var sophie = new Dog("Sophie", "Bernadoodle");
    var toph = new Dog("Toph", "Goldendoodle");
    var sodie = new Dog("Sodie", "Shih-Tzu");

    cherryCreek.addDog(sophie);
    cherryCreek.addDog(toph);
    cherryCreek.addDog(sodie);

    cherryCreek.removeDog(toph);

    assert.deepEqual(cherryCreek.dogs, [sophie, sodie]);
  });

});
