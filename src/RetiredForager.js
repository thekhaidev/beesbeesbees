var RetiredForagerBee = function() {
  new ForagerBee();
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
  RetiredForagerBee.prototype.forage = () => 'I am too old, let me play cards instead';
  this.food = Grub.prototype.food;
  RetiredForagerBee.prototype.eat = Grub.prototype.eat;
  this.treasureChest = ForagerBee.prototype.treasureChest;
  RetiredForagerBee.prototype.gamble = function() {
    this.treasureChest.push('treasure');
  };

  _.extend(ForagerBee.prototype, this);
};

