// Write your code here
module.exports = Person
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.introduce = function() {
  var txt = "My name is " + this.name + ". I am " + age + "years old.";
  return txt;
}
