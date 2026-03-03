// 5. Motor de configuración avanzada
// Requerimiento: Dispones de estas configuraciones:
// const baseConfig = { modo: "producción", lenguaje: "es", nivel: 1 };
// const extraConfig = { nivel: 2, tema: "oscuro" };
// Crea la función configFinal(...configs) que:
// 1. Reciba múltiples configuraciones usando rest.
// 2. Use spread para mezclarlas todas en un solo objeto final sin mutar ninguna.
// 3. Valide con try…catch que cada elemento recibido sea un objeto.
// 4. Retorne un objeto final con una propiedad adicional:
// o validacion: true si todo salió bien

// Exportamos la función ejercicio5 para que pueda ser utilizada en otros módulos
export const ejercicio5 = () => {
    console.log("Ejecuntando el ejercicio 5: Motor de configuración avanzada"); // Mensaje de alerta para indicar que se está ejecutando el ejercicio 5

    // Función que recibe múltiples configuraciones y las mezcla en un solo objeto final
    const configFinal = (...configs) => {
        try {
            // Validamos que cada elemento recibido sea un objeto
            for (const config of configs) {
                if (typeof config !== "object" || config === null || Array.isArray(config)) {
                    throw new Error("Todos los elementos deben ser objetos");
                }
            }

            // Utilizamos reduce para mezclar todas las configuraciones en un solo objeto final sin mutar ninguna
            const finalConfig = configs.reduce((acc, curr) => ({ ...acc, ...curr }), {});

            // Retornamos objeto con propiedad adicional
            return { ...finalConfig, validacion: true };

        // Si ocurre algún error durante la validación,
        // lo capturamos y retornamos un objeto con validacion: false y el mensaje de error
        } catch (error) {
            console.error(error.message);
            return { validacion: false, error: error.message };
        }
    };

    // Probamos la función configFinal con las configuraciones baseConfig y extraConfig
    const baseConfig = { modo: "producción", lenguaje: "es", nivel: 1 };
    const extraConfig = { nivel: 2, tema: "oscuro" };

    // Llamamos a la función configFinal con las configuraciones y mostramos el resultado en la consola
    const resultado = configFinal(baseConfig, extraConfig);
    console.log("Resultado del motor de configuración:", resultado);
};