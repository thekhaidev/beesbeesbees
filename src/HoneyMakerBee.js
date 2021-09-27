var HoneyMakerBee = function() {
  new Bee();
  this.age = 10;
  this.job = 'make honey';
  this.color = Bee.prototype.color;
  this.food = Grub.prototype.food;
  HoneyMakerBee.prototype.eat = Grub.prototype.eat;
  this.honeyPot = 0;
  HoneyMakerBee.prototype.makeHoney = function() {
    this.honeyPot++;
  };
  HoneyMakerBee.prototype.giveHoney = function() {
    this.honeyPot--;
  };
};

