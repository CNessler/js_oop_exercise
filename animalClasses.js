function Animal(name){
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(this.name + ' says hi!');
}

Animal.prototype.feed = function () {
  console.log('Nom Nom Nom');
}

function Pig() {
  Animal.call(this, 'Herman');
}

Pig.prototype = new Animal;

Pig.prototype.rollInMud = function () {
  console.log('Rolls in mud!');
}

var piggy = new Pig();
piggy.speak();
piggy.feed();
piggy.rollInMud();

function Rhino(stillHasHorn) {
  Animal.call(this, 'RhinO')
  this.stillHasHorn = true;
}

Rhino.prototype = new Animal;

Rhino.prototype.removeHorn = function () {
  this.stillHasHorn = false;
  console.log(':(');
}
console.log("*********");
console.log("*********");
console.log(Rhino.prototype);

var rhino = new Rhino();
rhino.speak();
rhino.feed();
rhino.removeHorn();

function Dog(breed) {
  Animal.call(this, 'Howard');
  this.breed = breed;
}

Dog.prototype = new Animal;

Dog.prototype.isPureBred = function () {
  if (this.breed === 'mutt'){
    console.log(false);
  } else {
    console.log(true);
  }
}

var footprints = new Dog('mutt');
footprints.speak();
footprints.feed();
console.log(footprints.breed);
footprints.isPureBred();
