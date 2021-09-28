var RetiredForagerBee = function() {
  new ForagerBee();
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
  this.food = Grub.prototype.food;

  this.treasureChest = ForagerBee.prototype.treasureChest;


  _.extend(ForagerBee.prototype, this);
};

RetiredForagerBee.prototype.gamble = function() {
  this.treasureChest.push('treasure');
};

RetiredForagerBee.prototype.eat = Grub.prototype.eat;