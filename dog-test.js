var assert = require('chai').assert;
var Dog = require('./dog');
var DogPark = require('./dog-park');

describe('Dog', function() {

  it('should have a name and breed', function() {
    var toph = new Dog({ name: "Toph", breed: "Goldendoodle" });

    assert.equal(toph.name, "Toph");
    assert.equal(toph.breed, "Goldendoodle");
  });

  it('should be able to have a different name and breed', function() {
    var sophie = new Dog({ name: "Sophie", breed: "Bernadoodle" });

    assert.equal(sophie.name, "Sophie");
    assert.equal(sophie.breed, "Bernadoodle");
  });

  it('should start off with full energy', function() {
    var sophie = new Dog({ name: "Sophie", breed: "Bernadoodle" });
    var toph = new Dog({ name: "Toph", breed: "Goldendoodle" });

    assert.equal(sophie.energy, 3);
    assert.equal(toph.energy, 3);
  });

  it('should start off not hungry', function() {
    var sophie = new Dog({ name: "Sophie", breed: "Bernadoodle" });
    var toph = new Dog({ name: "Toph", breed: "Goldendoodle" });

    assert.equal(sophie.hungry, false);
    assert.equal(toph.hungry, false);
  });

  it('should start off with no toys', function() {
    var sophie = new Dog({ name: "Sophie", breed: "Bernadoodle" });
    var toph = new Dog({ name: "Toph", breed: "Goldendoodle" });

    assert.deepEqual(sophie.toys, []);
    assert.deepEqual(toph.toys, []);
  });

  it('should be able to acquire toys', function() {
    var sophie = new Dog({ name: "Sophie", breed: "Bernadoodle" });
    var christmasBone = { name: "Christmas Bone", shape: "bone", squeaky: true, soft: true };
    var kong = { name: "kong", shape: "cone", squeaky: false, soft: false };

    sophie.getToy(christmasBone);
    sophie.getToy(kong);

    assert.deepEqual(sophie.toys, [christmasBone, kong]);
  });

  it('should be able to find squeaky toys (humans love that)', function() {
    var sophie = new Dog({ name: "Sophie", breed: "Bernadoodle" });
    var christmasBone = { name: "Christmas Bone", shape: "bone", squeaky: true, soft: true };
    var kong = { name: "kong", shape: "cone", squeaky: false, soft: false };
    var turtle = { name: "Rainbow Turtle", shape: "turle", squeaky: true, soft: true };

    sophie.getToy(christmasBone);
    sophie.getToy(kong);
    sophie.getToy(turtle);

    var squeakyToys = sophie.findSqueakyToys();

    assert.deepEqual(squeakyToys, [christmasBone, turtle]);
  });

  it('gets a little tired after playing', function() {
    var sophie = new Dog({ name: "Sophie", breed: "Bernadoodle" });

    sophie.play();
    assert.equal(sophie.energy, 2);

    sophie.play();
    sophie.play();
    assert.equal(sophie.energy, 0);
  });

  it('gets hungry after a full day of playing', function() {
    var sophie = new Dog({ name: "Sophie", breed: "Bernadoodle" });

    sophie.play();
    assert.equal(sophie.hungry, false);

    sophie.play();
    sophie.play();
    assert.equal(sophie.hungry, true);
  });

  it('can eat', function() {
    var sophie = new Dog({ name: "Sophie", breed: "Bernadoodle" });

    sophie.play();
    sophie.play();
    sophie.play();

    sophie.eat();
    assert.equal(sophie.hungry, false);
  });

  it('can only eat when hungry', function() {
    var sophie = new Dog({ name: "Sophie", breed: "Bernadoodle" });

    sophie.play();

    assert.equal(sophie.eat(), `I'm not ready to eat!`);
  });

  it('can make a friend', function() {
    var sophie = new Dog({ name: "Sophie", breed: "Bernadoodle" });
    var toph = new Dog({ name: "Toph", breed: "Goldendoodle" });

    sophie.makeFriends(toph);

    assert.equal(sophie.friends.length, 1);
    assert.deepEqual(sophie.friends, [toph]);
  });

  it('can make multiple friends', function() {
    var sophie = new Dog({ name: "Sophie", breed: "Bernadoodle" });
    var toph = new Dog({ name: "Toph", breed: "Goldendoodle" });
    var sodie = new Dog({ name: "Sodie", breed: "Shih-Tzu" });

    sophie.makeFriends(toph);
    sophie.makeFriends(sodie);

    assert.equal(sophie.friends.length, 2);
    assert.deepEqual(sophie.friends, [toph, sodie]);
  });

  it('can list friends that are playful', function() {
    var sophie = new Dog({ name: "Sophie", breed: "Bernadoodle" });
    var toph = new Dog({ name: "Toph", breed: "Goldendoodle" });
    var sodie = new Dog({ name: "Sodie", breed: "Shih-Tzu" });

    sophie.makeFriends(toph);
    sophie.makeFriends(sodie);

    var playfulFriends = sophie.findFriendsToPlayWith();

    assert.deepEqual(playfulFriends, [toph, sodie]);
  });

  it('can list friends that are playful', function() {
    var sophie = new Dog({ name: "Sophie", breed: "Bernadoodle" });
    var toph = new Dog({ name: "Toph", breed: "Goldendoodle" });
    var sodie = new Dog({ name: "Sodie", breed: "Shih-Tzu" });

    toph.play();
    toph.play();
    toph.play();

    sodie.play();
    sodie.play();
    sodie.play();

    sophie.makeFriends(toph);
    sophie.makeFriends(sodie);

    var playfulFriends = sophie.findFriendsToPlayWith();

    assert.deepEqual(playfulFriends, []);
  });

  // pass the dog park tests,
  // then come back to pass the dog tests below

  it('should start off not in a dog park', function() {
    var sophie = new Dog({ name: "Sophie", breed: "Bernadoodle" });

    assert.equal(sophie.inDogPark, false);
  });

  it('should be able to enter a dog park', function() {
    var sophie = new Dog({ name: "Sophie", breed: "Bernadoodle" });
    var cherryCreek = new DogPark("Cherry Creek");

    sophie.enterDogPark(cherryCreek);

    assert.equal(sophie.inDogPark, true);
  });

  it('should be able to leave a dog park', function() {
    var sophie = new Dog({ name: "Sophie", breed: "Bernadoodle" });
    var cherryCreek = new DogPark("Cherry Creek");

    sophie.enterDogPark(cherryCreek);
    sophie.leaveDogPark(cherryCreek);

    assert.equal(sophie.inDogPark, false);
  });

});
