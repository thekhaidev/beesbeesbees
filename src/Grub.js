var Grub = function() {
  this.age = 0;
  this.color = 'pink';
  this.food = 'jelly';
  Grub.prototype.eat = function() {
    console.log(this + ' is eating!');
  };

  _.extend(Grub.prototype, this);
};

