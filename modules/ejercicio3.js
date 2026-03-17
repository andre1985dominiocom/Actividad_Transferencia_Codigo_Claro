export const ejercicio3 = () => {
    console.log("Ejecutando el ejercicio 3");

    function validar(cliente, productos) {
    const { nombre, correo } = cliente

    if (nombre == null || correo == null) {
        return false
    }

    for (const { nombre, precio } of productos) {
        if (nombre == null || typeof precio !== "number") {
            return false
        }
    }

    return true
}

function procesarCompra(cliente, productos) {
    try {
        if (validar(cliente, productos)) {
            const [{ nombre: nombrePrimero, precio: precioPrimero }] = productos;

            let precioTotal = 0;
            for (const { precio } of productos) {
                precioTotal += precio
            }

            console.log(`total productos: ${productos.length}`);
            console.log(`precio total: $${precioTotal}`);
            console.log(`primer producto: ${nombrePrimero} - $${precioPrimero}`)
        } else {
            throw new Error("Hubo un error en los datos")
        }
    } catch (error) {
        console.log(error.message)
    }
}

let cliente = {
    nombre: "anderson",
    correo: "123@gmail.com"
};

let productos = [
    { nombre: "jabón",       precio: 1000 },
    { nombre: "desodorante", precio: 800  }
]

procesarCompra(cliente, productos);
}