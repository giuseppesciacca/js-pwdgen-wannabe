/*
Chiedi all'utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina il risultato usando questo formato: nomecognomecolorepreferito23
*/

let names = prompt('Inserisci il tuo nome qui:');
let surname = prompt('Inserisci il tuo cognome qui:');
let color = prompt('Quale è il tuo colore preferito?');

let result = document.getElementById('name_surname_color');
result.innerHTML = `${names}${surname}${color}`;


