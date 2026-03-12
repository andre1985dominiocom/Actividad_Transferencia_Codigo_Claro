
export const ejercicio2 = () => {
    console.log("Ejecutando el ejercicio 2");
    // 2. Fusión de catálogos digitales
    // Requerimiento:
    // Tienes dos catálogos:
    // const catalogoA = [
    // { id: 1, nombre: "Curso JavaScript", precio: 40 },
    // { id: 2, nombre: "Curso HTML", precio: 35 }
    // ];
    // const catalogoB = [
    // { id: 3, nombre: "Curso CSS", precio: 30 }
    // ];

    // Crea una función fusionarCatalogos(a, b) que:

    // 1. Use try...catch para validar que ambos parámetros sean arreglos.
    // 2. Utilice spread para fusionarlos sin modificar los originales.
    // 3. Retorne un nuevo catálogo ordenado por precio ascendente.
    // Resultado esperado:
    // Una nueva colección combinada, ordenada e inmutable. Si un parámetro no es un arreglo,
  // debe mostrarse un error comprensible.

  //creamos el primer arregglo que se llama catalogoA, y contiene 2 objetos.
  const catalogoA = [{
    id: 1,
    nombre: "curso JavaScript",
    precio: 40
  },
  {
    id: 2,
    nombre: "curso HTML",
    precio: 35
  }]
  //creamos el segundo arreglo que se llama catalogoB, y contiene un solo objeto
  const catalogoB = [{
    id: 3,
    nombre: "curso CSS",
    precio : 30
  }]

  //creamos la funciona para validad por medio de try catch, que ambos parametro que recibe sean arreglos

  function validarArreglos(a, b) {

    try {
      // con la condicional if, vamos a validar, que los dos parametros tienenn que ser arreglos,
      //para estos empezamos negando la condincion, y con metodo array.isarray, validamos que cada parametro sea un arreglos
      // con el operador logico or, validamos que si alguno de los dos parametros no es un arreglo, se lanzara el error
      if (!Array.isArray(a) || !Array.isArray(b)) {
        throw new Error("ambos parametros deben ser arreglos. ")

      }
      //se utiliza spread (...), para fucionarlos
      // el operador spread permite copiar o expandri estructuras sin afectar su valor original
      // los colocamos dentro de un nuevo arreglo sin afectar el original
      const catalogoC = [...a, ...b];

       // Ordenamos por precio ascendente
      //  con el metodo .sort sirve para ordenar arreglos, en este caso catalogoc tiene 2 arreglos
      // se crea una funcion con 2 para metros para compararlos, estos 2 paramtro reprsentan 2 arreglods

      const ordenado = catalogoC.sort(function(cursoA, cursoB) {
        return cursoA.precio - cursoB.precio;
      });

      // Retornamos el nuevo catálogo ordenado
      return ordenado;
    }catch(error){
      // si ocurre un error se atraoa aca
      console.log("Error", error.message);
    }
  }
  console.log(validarArreglos(catalogoA, catalogoB));
  console.log(validarArreglos(catalogoA, "otro")); //acadeberia mostrar el error
  // console.log(catalogoC);
}


