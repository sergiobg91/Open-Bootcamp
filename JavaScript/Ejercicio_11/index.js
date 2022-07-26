class Estudiante {
  constructor(nombre, asignaturas) {
    this.nombre = nombre;
    this.asignaturas = asignaturas;
  }

  obtenDatos() {
    return {
      nombre: this.nombre,
      asignaturas: this.asignaturas,
    };
  }
}

const estudiante1 = new Estudiante("Sergio", ["HTML", "CSS", "JS"]);
console.log(estudiante1.obtenDatos());
