/* 

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.


*/

const input = document.querySelector('button');
const domElement = document.querySelector('.print');
const bombList = [];
const scoreList = [];

while (bombList.length < 16) {

  const bomb = Math.floor(Math.random() * 16) + 1;

  if (bombList.indexOf(bomb) === -1) {

    bombList.push(bomb);

  }
}
console.log(bombList);

input.addEventListener('click', function() {
  
    let limit = 100
    generateMineField(limit, domElement)
    
})

function generateMineField(limit, domElement) {

    for (let i = 0; i < limit; i++) {

        console.log(i);
        const cell = generateCell(i + 1, 'div', 'mine_cell', limit)
        domElement.append(cell)        
    }
    
}

/**
 * 
 * @param {number} numb index generati
 * @param {string} el elemento in pagina
 * @param {string} css_class classe css applicata all'elemento creato
 * @param {number} limit il massimo di celle che vengono create
*/

function generateCell(numb, el, css_class, limit) {

    console.log(numb);
    const cell = document.createElement(el);
    cell.append(numb);
    cell.classList.add(css_class);
    cell.style.width = `calc(100% / ${Math.sqrt(limit)})`;

    cell.addEventListener('click', function() {

        cell.classList.add("bg-info")
        
    })
    
}

/* for (let i = 1; i < 101; i++) {

        let cell = document.createElement('div');
        cell.setAttribute("class",'square py-5 border border-info text-light text-center')
        domElement.append(cell)

        cell.addEventListener('click', function() {
        
                    console.log(i);
                    cell.innerText = i;
                    cell.classList.add("bg-info")
        
                })
  
    }

    input.classList.add('d-none') */