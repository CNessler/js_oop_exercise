function Animal(name, age, kind){
  this.name = name;
  this.kind = kind;
  this.age = age;
  this.awake = false;
}


Animal.prototype.oink = function(){
  if (this.kind === 'Pig'){
  return 'oink';
  } else {
  return 'I am not a pig';
  }
}

Animal.prototype.growUp = function () {
  this.age += 1;
}

Animal.prototype.awake = function () {
  this.awake;
}

Animal.prototype.wakeUp = function () {
  this.awake = true;
}

Animal.prototype.sleep = function () {
  this.awake;
}

Animal.prototype.feed = function () {
  if (this.awake === true){
    return 'Nom Nom';
  } else{
    return 'zzzz';
  }
}

module.exports=Animal;
