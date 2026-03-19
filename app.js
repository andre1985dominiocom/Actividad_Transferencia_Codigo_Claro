// Importamos los ejercicios desde el módulo index.js
import * as ejercicios from './modules/index.js';

// Función para mostrar el menú y ejecutar los ejercicios seleccionados por el usuario
const menu = () => {
    let salir = false; // Variable para controlar la salida del programa

    // Se utiliza un bucle while para mostrar el menú hasta que el usuario decida salir
    while (!salir) {
        let input = prompt(
            "Seleccione un ejercicio (1-5):\n" +
            "1. Ejercicio 1\n" +
            "2. Ejercicio 2\n" +
            "3. Ejercicio 3\n" +
            "4. Ejercicio 4\n" +
            "5. Ejercicio 5\n" +
            "0. Salir");

            if (input === null) {
                salir = true;
                break
            }

            let opcion = parseInt(input);
            switch (opcion) {
                case 1:
                    ejercicios.ejercicio1();
                    break;
                case 2:
                    ejercicios.ejercicio2();
                    break;
                case 3:
                    ejercicios.ejercicio3();
                    break;
                case 4:
                    ejercicios.ejercicio4();
                    break;
                case 5:
                    ejercicios.ejercicio5();
                    break;
                case 0:
                    salir = true;
                    console.log("Saliendo del programa. ¡Hasta luego!");
                    break;
                default:
                    console.log("Opción no válida, por favor intente nuevamente.");
        };
        // Se utiliza un switch para ejecutar el ejercicio seleccionado por el usuario
    };
}
menu(); // Llamamos a la función menu para iniciar el programa