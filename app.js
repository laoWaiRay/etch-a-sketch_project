const grid = document.querySelector('.grid');
const body = document.querySelector('body');
const btnReset = document.querySelector('.btnReset');
const btnClear = document.querySelector('.btnClear');

const makeGrid = function(gridSize){
    for(let i=0; i<gridSize**2; i++){
        grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
        const tile = document.createElement('div');
        tile.classList.add('square');
        grid.append(tile);
        
    }
}

let gridSize = prompt('Enter a grid size:');
while(gridSize>100){
    gridSize = prompt('Please enter a grid size less than 100:')
}

const addSquareEvent = function(){
    const allSquares = document.querySelectorAll('.square');

    let mouseActive = false;

    body.addEventListener('mousedown', ()=>{
        mouseActive = true;
    })

    body.addEventListener('mouseup', ()=>{
        mouseActive = false;
    })
        
    for(square of allSquares){
        square.addEventListener('mousemove', function(){
            if(mouseActive === true) {
                this.classList.add('colorSquare');
            }
        })
        square.addEventListener('mousedown', function(){
            this.classList.add('colorSquare');
        })
    }
}

makeGrid(gridSize);
addSquareEvent();

btnReset.addEventListener('click', () => {
    let gridSize = prompt('Please enter a grid size less than 100:')
    if(gridSize <= 100){
        makeGrid(gridSize)
    }
    while(gridSize>100){
        gridSize = prompt('Please enter a grid size less than 100:')
        if(gridSize <= 100){
            makeGrid(gridSize)
        }
    }
    grid.innerHTML = "";
    makeGrid(gridSize);
    addSquareEvent();
})

btnClear.addEventListener('click', ()=>{
    const allSquares = document.querySelectorAll('.square');
    for (square of allSquares){
        square.classList.remove('colorSquare');
    }
})


// for(let i=0; i<gridSize**2; i++){
//     document.querySelector(`.grid .square:nth-child(9)`).addEventListener('click', () => {
//         document.querySelector(`.grid .square:nth-child(4)`).style.backgroundColor = 'red';
//     })
//     console.log(`The index is ${i}`)
// }



// square.addEventListener('click' () => {
//     console.log('You clicked me!')
// })


