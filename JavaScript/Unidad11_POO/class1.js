class Person {

    //Atributos privados con #
    //Solo se puede acceder desde dentro de la clase.
    #name;
    #age;

    //Atributos protegidos con _
    //Solo se pueden acceder desde dentro de la clase y desde las subclases
    _isDeveloper = true;

  constructor(name, age, isDeveloper) {
    this.#name = name;
    this.#age = age;
    this.isDeveloper = isDeveloper;
  }

  sayHello() {
    console.log(`Hi ${this.name}`);
  }

  getPrivateName() {
    return this.#name;
  }

  getPrivateAge() {
    return this.#age;
  }

  setPrivateAge(newAge) {
    this.#age = newAge;
  }

  //Metodo privado
  #getAge() {
    return this.#age;
  }
}

const person1 = new Person("Sergio", 30, true);
const person2 = new Person("Pepe", 25, false);

person1.sayHello(); //Undefined ya que falta #
person1.getPrivateName(); //Sergio

// person1.#getAge(); //Error, no se puede acceder a un metodo privado

//-------------------------------------------------------------------------//

//Getter -> Permite acceder/obtener un atributo/metodo privado o protegido
const age = person1.getPrivateAge(); //30

//Setter -> Permite modificar un atributo/metodo privado o protegido
person1.setPrivateAge(31);