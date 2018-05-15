const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    let dinosaur1 = new Dinosaur("Blob","Food1",100);
    let dinosaur2 = new Dinosaur("Blue Blob","Food2",1000);
    let dinosaurs = [dinosaur1,dinosaur2];
    park = new Park("Jurrassic Park",4.99,dinosaurs);

  })

  it('should have a name', function () {
      const actual = park.name;
      assert.strictEqual(actual,"Jurrassic Park")
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual,4.99);

  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual,2);

  });

  it('should be able to add a dinosaur to its collection', function () {
    const specialDinosaur = new Dinosaur("Green Gecko","Food1",567);
    park.addDinosaur(specialDinosaur);
    const actual = park.dinosaurs.length
    assert.strictEqual(actual,3)

  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.removeDinosaur("Blue Blob");
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual,1);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    const foundDinos = park.findAllDinos("Blue Blob");
    assert.strictEqual(foundDinos.length,1);

  });

  xit('should be able to remove all dinosaurs of a particular species', function () {

  });

  xit('should be able to find the dinosaur that attracts the most visitors', function () {

  });

});
