// conexión con html (seleccionar elementos)
 
const songForm = document.getElementById('song_form');
const playList = document.getElementById('play_list');
 
// Función para agregar una canción a la lista
 
function addSong(songName, artistName, songUrl){
    const listSong = document.createElement('li');
    listSong.innerHTML = `
            <strong> ${songName} </strong>
            -${artistName}
            <a href="${songUrl}" target= "_blank">Reproducir</a>
            <button class= "delete-btn" >Eliminar</button>
    `;
    // Agregar los cambios al html
    playList.appendChild(listSong);
 
 
}
 
// manejo de envios de formularios (Eventos)
 
songForm.addEventListener('submit', (event) => {
    event.preventDefault();
 
    //Obtener formulario
    const songName = document.getElementById("song_name").value;
    const artistName = document.getElementById("artist_name").value;
    const songUrl = document.getElementById("url_song").value;
 
    addSong(songName, artistName, songUrl);
 
    songForm.reset();
   
 
 
} )