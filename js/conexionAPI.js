//Conexión a la API 
async function listarVideos() {
    //fetch es una función que permite hacer peticiones a un servidor
    const conexion = await fetch("http://localhost:3001/videos");

    //await es una palabra clave que se puede usar para esperar a que se resuelva una promesa
    const conexionConvertida = await conexion.json();

    //console.log(conexionConvertida);
    return conexionConvertida;

}

//Exportar la función listarVideos
export const conexionAPI = {
    listarVideos
}
//listarVideos();