// do not remove this line...you're going to need it for your addAnimal method
var Animal = require("./animal");

function Zoo(name, location, status){
  this.name = name;
  this.location = location;
  this.status = "closed";
}

Zoo.prototype.changeLocation = function(newLocation){
  return this.location = newLocation;
};

Zoo.prototype.open = function () {
  return this.status = 'open';
}

Zoo.prototype.isOpen = function () {
  if (this.status === 'open'){
    return 'Open!';
  } else {
    return 'Zoo is closed';
  }
}

Zoo.prototype.animals = function () {
  // var animals = [];
  return animals
}
module.exports=Zoo;
