let btnAdd = document.querySelector('button');
let table = document.querySelector('table');

let artistInput = document.getElementById('userArtist')
let songInput = document.getElementById('userSong')

btnAdd.addEventListener('click', () =>{
    let artist = artistInput.value;
    let song = songInput.value

    let template = `
        <tr>
            <td>${artist}</td>
            <td>${song}</td>
        </tr>`;

    table.innerHTML += template;
});