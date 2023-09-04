/* 

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

*/

const input = document.querySelector('button');
const domElement = document.querySelector('.print');

input.addEventListener('click', function() {
    
    let limit = 100
    
    generateMineField(limit, domElement)
    
})

function generateMineField(limit, domElement) {

    for (let i = 0; i < limit; i++) {

        const cell = generateCell(i + 1, 'div', 'mine_cell', limit)

        domElement.append(cell)        
    }
    
}

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