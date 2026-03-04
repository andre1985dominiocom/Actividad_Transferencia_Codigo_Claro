export const ejercicio1 = () => {
  console.log("Ejecutando el ejercicio 1");
  // 1. Sistema de registro académico
  // Requerimiento:
  // Crea una función crearEstudiante(nombre, ...notas) que reciba:
  // • Un nombre obligatorio.
  // • Un número variable de notas mediante rest.
  
  // La función debe:
  // 1. Validar con try...catch que todas las notas sean números.
  // 2. Usar destructuración para separar la primera nota del resto.
  // 3. Retornar un objeto inmutable con:
  // o Nombre
  // o Primera nota
  // o Promedio del resto de notas
  // o Total de notas registradas
  
  // Resultado esperado:
  // Un objeto final correctamente construido, sin mutar ningún arreglo externo, con cálculos
  // correctos y con manejo adecuado de errores.
  
  //creamos una funcion, para receibir el nombre,  y me diante el parametro rest, se recibira un numero de notas desconocidas ...notas
  function crearEstudiante(nombre, ...notas) {
    try {
      // con el try vamos a validad que todas las notas sean numeros
      //con un for of vamos a reccores todas las notas que han guardado
      for (let nota of notas) {
        
        //con isnan: valdiamos si la ntoa se puede convertir a numerico
        if (isNaN(Number(nota))) {
          //si al momento de ingresar la nota, no es unumero valido lanzr el error
          throw new Error(`la nota: ${nota}, no es numero valido.`);
          
        }
      }
      // usamso destrctuturacion pra separar la primera nota del resto de las notas lo guardamos en una constante
      const [primeraNota, ...otrasNotas] = notas.map(Number); //convertimos las notas a numeros
  
      //calculamos el promedio del resto de las demas notas
      //pra esto se guardara en una varibale que se llamara promedioresto y se inicializara en 0
      let suma = 0;
      for (let i of otrasNotas) {
        suma += i; // sumamamos cada nota de otras notas y se almacena en suma
      }
      //para obtener el prmodeio de las notas, se divide, suma entre resto de las notas.length que es el numero de notas que se han ingresado
      // con el operador ternario validamos, que si resto de notas es mauor a 0, se hace la division, pero si no exiten mas notas, el resultado sera 0
      let promedioResto = otrasNotas.length > 0 ? suma / otrasNotas.length : 0; // si no hay otras notas, el promedio sera 0
  
      return {
        nombre,
        primeraNota,
        promedioResto,
        totalNotas: notas.length
      };
    } catch (error) {
      console.log("Error: ", error.message);
    }
  }
  
  console.log(crearEstudiante("sherman", 10, 8, 7, 8))
  console.log(crearEstudiante("Luciano", 8, 5, 6, 8))
  console.log(crearEstudiante("chepito", "ocho", 8, 5, 6, 8))
}

