const nombre = "Sergio";
const apellido = "Beltran Galvis";

const estudiante = `${nombre} ${apellido}`;
const estudianteMayus = estudiante.toUpperCase();
const estudianteMinus = estudiante.toLowerCase();
const cantidadLetrasEstudiante = estudiante.length;
const primeraLetraNombre = nombre[0];
const ultimaLetraApellido = apellido[apellido.length - 1];
const estudianteSinEspacios = estudiante.replace(/\s/g, "");
const nombreEnEstudiente = estudiante.includes(nombre);
