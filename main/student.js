let Person = require('./person')
// Write your code here
module.exports = Student

function Student(name, age, kclass) {
  Person.call(this, name, age);
  this.kclass = kclass;
}

Student.prototype = new Person();

Student.prototype.introduce = function () {
  var txt = "My name is " + this.name + ".";
  txt += "I am " + this.age + "years old.";
  txt += "I am a Student. I am at Class " + this.kclass + ".";
  return txt;
}
