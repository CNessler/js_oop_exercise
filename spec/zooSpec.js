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
      zoo.status === 'open';
      expect(zoo.addAnimal(pig)).toEqual(['Pig'])
    });
    it('should add an animal to the animals array', function(){
      zoo.status === 'open';
      expect(zoo.addAnimal(lion)).toEqual(['lion']);
    });

    it('should only add instances of animals', function(){
      zoo.status === 'open';
      expect(zoo.addAnimal(lion)).toEqual(['lion']);
    });

    it('should not add duplicates', function(){
      zoo.status = 'open';
      expect(zoo.addAnimal(pig)).toEqual(['Pig']);
      expect(zoo.addAnimal(lion)).toEqual(['Pig', 'lion']);
      expect(zoo.addAnimal(pig)).toEqual(['Pig', 'lion']);
    });
  });

  describe('#removeAnimal', function(){
    it('should remove an animal from the animals array if the zoo is open', function(){
      expect(zoo.removeAnimal(pig)).toEqual([]);
    });
  });
});
