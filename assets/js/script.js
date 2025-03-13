//crea un titolo h1 con il testo Counter
let titolo = createElement('h1', 'Counter:', 'titolo', 'text', document.body);

//crea il numero inizializzato a 0
let numero = createElement('h2', '0', 'numero', 'text', document.body); 

//crea un contenitore per i bottoni
let buttonContainer = createElement('div', '', '', 'button-container', document.body);

//crea il bottone + 
let plusButton = createElement('button', '+', '', 'buttons', buttonContainer);

//crea il bottone reset
let resetButton = createElement('button', 'Reset', '', 'reset', buttonContainer);

//crea il bottone -
let minusButton = createElement('button', '-', '', 'buttons', buttonContainer);


//event listener sul bottone + per incrementare il numero
plusButton.addEventListener("click", function () {
    numero.innerHTML++;
});

//event listener al bottone - per decrementare il numero
minusButton.addEventListener("click", function () {
    numero.innerHTML--;
    if (numero.innerHTML < 0) {
        alert('Non puoi andare sotto 0');
        numero.innerHTML = 0;
    }
});

//event listener al bottone reset per resettare il numero
resetButton.addEventListener("click", function () {
    if (confirm('Sei sicuro di voler resettare il contatore?')) {
        numero.innerHTML = 0;
    }
});


/**
 * Crea un elemento HTML e lo aggiunge al parent.
 * 
 * @param {string} tag - Il tag html dell'elemento da creare.
 * @param {string} text - Il testo da inserire nell'elemento, lasciare vuoto se non presente.
 * @param {string} id - L'id dell'elemento, lasciare vuoto se non presente.
 * @param {string} classList - La classe dell'elemento, lasciare vuoto se non presente.
 * @param {HTMLElement} parent - Il genitore dell'elemento, lasciare vuoto se non presente.
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