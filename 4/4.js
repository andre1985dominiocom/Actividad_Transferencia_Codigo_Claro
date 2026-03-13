const jugadores = [
    {nombre : "ana", stats : {puntos : 20, asistencias : 5}},
    {nombre : "luis", stats : {puntos : 15, asistencias : 7}}
]

function estadisticas(jugadores) {
    try {
        if (verificacionDatos(jugadores)) {
            const [{nombre : nombre1, stats : {puntos: puntos1, asistencias : asistencias1}}] = jugadores
            let puntosTotales = 0
            for (const {stats : {puntos}} of jugadores) {
                puntosTotales += puntos
            }

            const resultados = {
                nombrePrimerJugador : nombre1,
                puntosPrimerJugador : puntos1,
                puntosTotalesEquipo : puntosTotales,
                listaJugadores : [...jugadores]
            }
            return resultados
        } else {
            throw new Error("Hubo un error");
        }
    } catch (error) {
        console.log(error.message);
    }
}

function verificacionDatos(jugadores) {
    for (const {nombre, stats} of jugadores) {
        if (nombre == null || stats == null ) {
            return false
        }

        const {puntos, asistencias} = stats;

        if ((typeof puntos !== "number" || typeof asistencias !== "number")) {
            return false
        }
    }
    return true
}

console.log(estadisticas(jugadores));
