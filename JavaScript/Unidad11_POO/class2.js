//Inheritance - Herencia
class Person {
  constructor(name, age, isDeveloper) {
    this.name = name;
    this.age = age;
    this.isDeveloper = isDeveloper;
  }

  sayHello() {
    console.log(`Hi, my name is ${this.name}, i have ${this.age} years old`);
  }
}

class Developer extends Person {
  constructor(name, age, language) {
    super(name, age); //llamamos al constructor de la clase padre, heredando sus atributos
    this.language = language;
  }

  //Override - Sobreescribir un metodo de la clase padre
  sayHello() {
    super.sayHello();
    console.log(`and i'm a ${this.language} developer`);
  }
}

const newDev = new Developer("Sergio", 30, "C++");

//Polymorphism - Polimorfismo
newDev.sayHello(); //Hi, my name is Sergio, i have 30 years old and i'm a C++ developer
