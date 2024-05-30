import { getJuegos } from './peticiones/get-juegos.js';

// Función para crear una card para cada juego
function crearCard(juego) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '18rem';
    card.style.marginLeft = '2rem';

    const imagen = document.createElement('img');
    imagen.classList.add('card-img-top');
    imagen.src = juego.img;
    card.appendChild(imagen);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const nombre = document.createElement('h5');
    nombre.classList.add('card-title');
    nombre.textContent = juego.name;
    cardBody.appendChild(nombre);

    const infoBtn = document.createElement('a');
    infoBtn.classList.add('btn', 'btn-primary');
    infoBtn.textContent = 'Más información';
    // Agregar el enlace a la página del juego con la información completa
    infoBtn.href = `juego.html?id=${juego.id}`; // Aquí modificamos el enlace
    cardBody.appendChild(infoBtn);

    card.appendChild(cardBody);

    return card;
}

// Obtener el contenedor donde se mostrarán las cards
const juegosContainer = document.getElementById('juegos-container');

// Obtener los juegos de la API y mostrarlos en cards
getJuegos()
    .then(data => {
        data.juegos.forEach(juego => {
            const card = crearCard(juego);
            juegosContainer.appendChild(card);
        });
    })
    .catch(error => console.error('Error al obtener los datos:', error));