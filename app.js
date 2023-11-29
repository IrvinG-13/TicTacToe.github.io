const gameBoard = document.getElementById('gameBoard');
const X = document.querySelector('.x-cont');
const O = document.querySelector('.o-cont');
const title = document.querySelector('h1');
const resetAll = document.getElementById('resetAll');
const result = document.querySelector('h2')

function createGameBoard(){

    let grid = 9;
    let playerSelection = null;

    X.addEventListener('click',()=>{
        playerSelection = "X" 
        X.style.border = '4px Solid blue'
        O.style.border = ''
        title.textContent = 'Started'
    })

    O.addEventListener('click',()=>{
        playerSelection = "O"
        X.style.border = ''
        O.style.border = '4px Solid blue'
        title.textContent = 'Started'
})

    let contador = 0;

    for(let i = 0; i < grid; i++){
        
            let square = document.createElement('div');
            square.classList.add('square');
            gameBoard.appendChild(square);
            
            square.id = contador;
            square.addEventListener('click',()=>{
                if(playerSelection && !square.textContent){
                    square.textContent = playerSelection
                    playerSelection = playerSelection === "X" ? "O" : "X";

                    let div0 = document.getElementById('0').textContent
                    let div1 = document.getElementById('1').textContent
                    let div2 = document.getElementById('2').textContent
                    let div3 = document.getElementById('3').textContent
                    let div4 = document.getElementById('4').textContent
                    let div5 = document.getElementById('5').textContent
                    let div6 = document.getElementById('6').textContent
                    let div7 = document.getElementById('7').textContent
                    let div8 = document.getElementById('8').textContent

                    if(div0 === 'X'  && div1 === 'X'  && div2 ==='X'){//FILAS
                        result.textContent = 'The Winner is X'
                    }if(div0 === 'O'  && div1 === 'O'  && div2 ==='O'){
                        result.textContent = 'The Winner is O'
                    }if(div3 === 'X'  && div4 === 'X'  && div5 ==='X'){
                        result.textContent = 'The Winner is X'
                    }if(div3 === 'O'  && div4 === 'O'  && div5 ==='O'){
                        result.textContent = 'The Winner is O'
                    }if(div6 === 'X'  && div7 === 'X'  && div8 ==='X'){
                        result.textContent = 'The Winner is X'
                    }if(div6 === 'O'  && div7 === '0'  && div8 ==='0'){
                        result.textContent = 'The Winner is O'
                    }if(div0 === 'X'  && div3 === 'X'  && div6 ==='X'){//COLUMNAS
                        result.textContent = 'The Winner is X'
                    }if(div0 === 'O'  && div3 === 'O'  && div6 ==='O'){
                        result.textContent = 'The Winner is O'
                    }if(div1 === 'X'  && div4 === 'X'  && div7 ==='X'){
                        result.textContent = 'The Winner is X'
                    }if(div1 === 'O'  && div4 === 'O'  && div7 ==='O'){
                        result.textContent = 'The Winner is O'
                    }if(div2 === 'X'  && div5 === 'X'  && div8 ==='X'){
                        result.textContent = 'The Winner is X'
                    }if(div2 === 'O'  && div5 === 'O'  && div8 ==='O'){
                        result.textContent = 'The Winner is O'
                    }if(div0 === 'X'  && div4 === 'X'  && div8 ==='X'){//DIAGONALES
                        result.textContent = 'The Winner is X'
                    }if(div0 === 'O'  && div4 === 'O'  && div8 ==='O'){
                        result.textContent = 'The Winner is O'
                    }if(div2 === 'X'  && div4 === 'X'  && div6 ==='X'){
                        result.textContent = 'The Winner is X'
                    }if(div2 === '0'  && div4 === '0'  && div6 ==='O'){
                        result.textContent = 'The Winner is O'
                    }else if (
                        (div0 === 'X' || div0 === 'O') &&
                        (div1 === 'X' || div1 === 'O') &&
                        (div2 === 'X' || div2 === 'O') &&
                        (div3 === 'X' || div3 === 'O') &&
                        (div4 === 'X' || div4 === 'O') &&
                        (div5 === 'X' || div5 === 'O') &&
                        (div6 === 'X' || div6 === 'O') &&
                        (div7 === 'X' || div7 === 'O') &&
                        (div8 === 'X' || div8 === 'O')
                    ) {
                        result.textContent = 'Is a Draw';
                    }
                }
            })
            
            /*Reset GameBoard */

            const reset = document.getElementById('reset');
            reset.addEventListener('click', () => {
                square.textContent = ''
                result.textContent = ''
            });

            /*Reset all */
            resetAll.addEventListener('click',()=>{
                window.location.reload()
            })

            contador++
    }
};


createGameBoard()


