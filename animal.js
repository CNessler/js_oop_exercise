

function Pig(name) {
  this.name = name;
}

Pig.prototype.speak = function () {
  console.log('oink');
}

Pig.prototype.feed = function () {
  console.log('Nom Nom Nom');
}

var p = new Pig('Babe');
p.speak();
p.feed();

function Rhino() {
  this.name = name;
}

Rhino.prototype.speak = function () {
  console.log('grunt');
}
