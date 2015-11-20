// 原型链
// 其基本思路是利用原型让一个引用类型继承另一个引用类型的属性和方法

function Person(){
	this.name = "Person";
}
Person.prototype.getName = function(){
	return this.name;
}
function SuperPerson(name,sex){
	this.name = name;
	this.sex = sex;
}
SuperPerson.prototype = new Person();//重写原型

//在添加新方法或重写原型中的方法时，一定要在重写原型的语句后面，而且不能使用字面量添加新方法，不然又会再一次重写原型，原型链被切断

SuperPerson.prototype.getSex = function(){
	return this.sex;
}

var Tom = new SuperPerson("Tom","man");
console.log(Tom.getName())
console.log(Tom.getSex())