var Animal = require('../src/animal.js'),
Zoo = require('../src/zoo.js'),
animals,
zoo;

describe('Zoo', function(){

  beforeEach(function(){
    // create a new zoo object each time
    zoo = new Zoo("Bronx","NYC");
    pig = new Animal("Babe",10,"Pig");
    lion = new Animal("Snoop",10,"lion");
  });

  describe('#changeLocation', function(){
    it('should change locations', function(){
      expect(zoo.changeLocation('indy')).toEqual('indy');
    });
  });

  describe('#open', function(){
    it('should change status to open', function(){
      expect(zoo.open()).toEqual('open');
    });
  });


  describe('#isOpen', function(){
    it('should see if the zoo is open', function(){
      zoo.open();
      expect(zoo.isOpen()).toEqual('Open!');
    });
    it('should see if the zoo is closed', function(){
      expect(zoo.isOpen()).toEqual('Zoo is closed');
    });
  });

  describe('#animals', function(){
    it('should initially be empty', function(){
      expect(zoo.animals).toEqual([]);
    });
  });


  describe('#addAnimal', function(){
    it('should only add an animal to the animals array when the zoo is open', function(){

    });
    it('should add an animal to the animals array', function(){

    });

    it('should only add instances of animals', function(){

    });

    it('should not add duplicates', function(){

    });
  });

  describe('#removeAnimal', function(){
    it('should remove an animal from the animals array if the zoo is open', function(){

    });
  });
});
