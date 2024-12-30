const formulario = document.querySelector("[data-formulario]");

function crearVideo(evento) {

    evento.preventDefault();   
    
    const titulo = document.querySelector("[data-titulo]").value;
    const url = document.querySelector("[data-url]").value;
    const imagem = document.querySelector("[data-imagem]").value;

    const descripcion = Math.floor(Math.random() * 10).toString();


}

formulario.addEventListener("submit", evento => crearVideo(evento));