var Bee = function() {
  new Grub();
  this.age = 5;
  this.color = 'yellow';
  this.food = Grub.prototype.food;

  this.job = 'keep on growing';

  _.extend(Bee.prototype, this);

};

Bee.prototype.eat = Grub.prototype.eat;

