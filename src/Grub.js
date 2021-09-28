var Grub = function() {
  this.age = 0;
  this.color = 'pink';
  this.food = 'jelly';


  _.extend(Grub.prototype, this);
};

Grub.prototype.eat = function() {
  console.log(this + ' is eating!');
};