

async function esperarSegundos(segundos) {
    // Retornar una promesa que se resuelve después de los segundos especificados
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, segundos * 1000); // Convertir segundos a milisegundos
    });
}


export default esperarSegundos;