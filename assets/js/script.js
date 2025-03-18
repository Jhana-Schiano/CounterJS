//Titolo h1 con il testo Counter
let titolo = createElement('h1', 'Counter:', 'titolo', '', document.body);

//Numero del counter inizializzato a 0
let numero = createElement('h2', '0', 'numero', '', document.body); 

//Contenitore per i bottoni
let buttonContainer = createElement('div', '', '', 'button-container', document.body);

//Bottone + 
let plusButton = createElement('button', '+', '', 'buttons', buttonContainer);

//Bottone reset
let resetButton = createElement('button', 'Reset', '', 'reset', buttonContainer);

//Bottone -
let minusButton = createElement('button', '-', '', 'buttons', buttonContainer);


//Event listener sul bottone + per incrementare il numero
plusButton.addEventListener("click", function () {
    numero.innerHTML++;
});

//Event listener al bottone - per decrementare il numero
minusButton.addEventListener("click", function () {
    numero.innerHTML--;
    if (numero.innerHTML < 0) {
        alert('Non puoi andare sotto 0');
        numero.innerHTML = 0;
    }
});

//Event listener sul bottone reset per resettare il numero
resetButton.addEventListener("click", function () {
    if (confirm('Sei sicuro di voler resettare il contatore?')) {
        numero.innerHTML = 0;
    }
});


/**
 * Crea un elemento HTML e lo aggiunge al parent.
 * Tutti i parametri sono opzionali tranne il tag.
 * 
 * @param {string} tag - Il tag html dell'elemento da creare.
 * @param {string} text - Il testo da inserire nell'elemento.
 * @param {string} id - L'id dell'elemento.
 * @param {string} classList - La classe o le classi dell'elemento.
 * @param {HTMLElement} parent - Il genitore dell'elemento.
 * @returns {HTMLElement} - L'elemento creato.
 */
function createElement(tag, text, id, classList, parent) {
    let element = document.createElement(tag);
    text?element.innerHTML = text : null;
    id?element.id = id : null;
    classList?element.classList.add(classList):null;
    parent?parent.appendChild(element):null;

    return element;
}


// Switch per cambiare il tema della pagina
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('change', function() {
    if (themeToggle.checked) {
        document.documentElement.style.setProperty('--primaryColor', '#e5e5e5');
        document.documentElement.style.setProperty('--backgroundColor', '#1d1a1a');
    } else {
        document.documentElement.style.setProperty('--primaryColor', '#1d1a1a');
        document.documentElement.style.setProperty('--backgroundColor', '#e5e5e5');
    }
});
