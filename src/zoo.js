// do not remove this line...you're going to need it for your addAnimal method
var Animal = require("./animal");

function Zoo(name, location, status){
  this.name = name;
  this.location = location;
  this.status = "closed";
  this.animals = [];
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
  return animals;
}

Zoo.prototype.addAnimal = function (animal) {
  if (this.status = 'open'){
    if (animal instanceof Animal){
      // console.log(this.animals.indexof(animal));
      if (this.animals.indexOf(animal.kind)<0){
        this.animals.push(animal.kind);
  }
  }
  }
        return this.animals;
}
  // if (this.status = 'open'){
  //   this.animals.push(animal.kind);
  //   return this.animals;
  // }
  // if (this.animal instanceof Animal){
  //   this.animals.push(animal.kind);
  //   return this.animals;
  // }
  // if (this.animals.indexof(animal)<0){
  //   this.animals.push(animal);
  //   return this.animals;
  // }

  // } else if (this.animal.name === animal.name){
  //     return 'already exists';
  // } else {
  //   return false;
  // }
  // if (this.status = 'open'){
  //     Zoo.animals.push(animal.kind);
  //   if (this.animal instanceof Animal){
  //     if (this.animal.indexof(animals)<0){
  //       Zoo.animals.push(animal.kind);
  //     }
  //     }
  //     }
  //     else {
  //       return false
  //     }
  //   }
    //indexof .kind
Zoo.prototype.removeAnimal = function (animal) {
  console.log(this.animals);
  this.animals.push(animal.kind)
  return this.animals.splice(1);
}
module.exports=Zoo;
