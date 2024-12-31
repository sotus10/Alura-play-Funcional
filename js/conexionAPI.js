//Conexión a la API 
async function listarVideos() {
    //fetch es una función que permite hacer peticiones a un servidor
    const conexion = await fetch("http://localhost:3001/vide");

    //await es una palabra clave que se puede usar para esperar a que se resuelva una promesa
    const conexionConvertida = await conexion.json();

    //console.log(conexionConvertida);
    return conexionConvertida;

}

//Crear un video con el metodo POST
async function enviarVideo(titulo, descripcion, url, imagem) {
    const conexion = await fetch("http://localhost:3001/videos", {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify({
            titulo: titulo,
            descripcion: `${descripcion} mil visualizaciones`,
            url: url,
            imagem: imagem
        })
    });
    
    const conexionConvertida = await conexion.json();

    return conexionConvertida;

}

async function buscarVideos(palabraClave) {
    const conexion = await fetch(`http://localhost:3001/videos?q=${palabraClave}`);
    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}

//Exportar la función listarVideos y crearVideo
export const conexionAPI = {
    listarVideos, enviarVideo, buscarVideos
}
//listarVideos();