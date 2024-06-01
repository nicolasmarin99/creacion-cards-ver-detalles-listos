import { enviarDatos } from "./operaciones.js";

const obtenerJuegos = async () => {
    try {
        const response = await fetch("https://listo-para-subir-api-videojuegos.onrender.com/juegos");
        const data = await response.json();
        return data.juegos; // Devolver solo el array de juegos
    } catch (error) {
        console.log(`el error es: ${error}`);
    }
}

const crearTarjetas = (juegosArray) => {
    let juegoRow = document.getElementById("juegoRow");

    juegosArray.map((juego) => {
        const { name, precio, img: imagen, descripcion } = juego;

        const divRow = document.createElement("div");
        divRow.classList.add("col-xl-3");
        divRow.classList.add("col-lg-3");
        divRow.classList.add("col-md-3");
        divRow.classList.add("col-sm-12");
        divRow.classList.add("col-xs-12");
        divRow.classList.add("mt-2");
        divRow.classList.add("mb-2");

        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = imagen;
        img.classList.add("card-img-top");

        const divBody = document.createElement("div");
        divBody.classList.add("card-body");

        const titulo = document.createElement("h5");
        titulo.classList.add("card-title");
        titulo.textContent = name;

        const subTitulo = document.createElement("p");
        subTitulo.classList.add("card-text");
        subTitulo.textContent = precio;

        const btnMostrar = document.createElement("button")
        btnMostrar.classList.add("btn");
        btnMostrar.classList.add("btn-danger");
        btnMostrar.textContent = "mostrar detalles";
        btnMostrar.addEventListener("click", () => {
            enviarDatos(name, precio, imagen, descripcion);
        })

        divRow.appendChild(card);

        card.appendChild(img);
        card.appendChild(divBody);

        divBody.appendChild(titulo);
        divBody.appendChild(subTitulo);
        divBody.appendChild(btnMostrar);

        juegoRow.appendChild(divRow)
    })
}

obtenerJuegos()
    .then((juegos) => {
        crearTarjetas(juegos);
    })
    .catch((error) => {
        console.log(error);
    });