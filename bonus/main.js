while (true) {
    let names = prompt('Inserisci il tuo nome qui:');
    if (names.length <= 0) {
        alert("devi inserire almeno una lettera - ricarica la pagina");
        break
    }
    else {
        let surname = prompt('Inserisci il tuo cognome qui:');
        if (surname.length <= 0) {
            alert("devi inserire almeno una lettera - ricarica la pagina");
            break
        }
        else {
            let color = prompt('Quale è il tuo colore preferito?');
            if (color.length <= 0) {
                alert("devi inserire almeno una lettera - ricarica la pagina");
                break
            } else {
                let result = document.getElementById('name_surname_color');
                result.innerHTML = `${names}${surname}${color}`;
                break
            }
        }
    }
};