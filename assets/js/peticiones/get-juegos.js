export function getJuegos() {
    return fetch('https://listo-para-subir-api-videojuegos.onrender.com/juegos')
        .then(response => response.json()) // Convertir la respuesta a JSON
        .catch(error => {
            console.error('Error al obtener los datos:', error); // Manejar errores
            throw error;
        });
}
