var HoneyMakerBee = function() {
  new Bee();
  this.age = 10;
  this.job = 'make honey';
  this.color = Bee.prototype.color;
  this.food = Grub.prototype.food;
  this.honeyPot = 0;

  _.extend(HoneyMakerBee.prototype, this);
};

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
};
HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
};

HoneyMakerBee.prototype.eat = Grub.prototype.eat;