var ForagerBee = function() {
  new Bee();
  this.age = 10;
  this.job = 'find pollen';
  this.color = Bee.prototype.color;
  this.food = Grub.prototype.food;
  this.canFly = true;
  this.treasureChest = [];


  _.extend(ForagerBee.prototype, this);
};

ForagerBee.prototype.forage = function() {
  this.treasureChest.push('treasure');
};

ForagerBee.prototype.eat = Grub.prototype.eat;