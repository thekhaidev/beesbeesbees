var ForagerBee = function() {
  new Bee();
  this.age = 10;
  this.job = 'find pollen';
  this.color = Bee.prototype.color;
  this.food = Grub.prototype.food;
  ForagerBee.prototype.eat = Grub.prototype.eat;
  this.canFly = true;
  this.treasureChest = [];
  ForagerBee.prototype.forage = function() {
    this.treasureChest.push('treasure');
  };

  _.extend(ForagerBee.prototype, this);
};

