/* 

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

*/

const input = document.querySelector('button');
let cell = document.createElement('div');

input.addEventListener('click', function() {

    const domElement = document.querySelector('.print');

    for (let i = 1; i < 101; i++) {

        let cell = document.createElement('div');
        cell.setAttribute("class",'square py-5 border border-info text-light text-center')
        domElement.append(cell)

        cell.addEventListener('click', function() {
        
                    console.log(i);
                    cell.innerText = i;
                    cell.classList.add("bg-info")
        
                    cell.addEventListener('click', function() {
        
                        cell.innerText = '' 
                        cell.classList.remove("bg-info")
                        
                    })
        
                })
  
    }

    input.classList.add('d-none')

    
})
