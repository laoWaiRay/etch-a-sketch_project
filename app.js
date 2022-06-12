const grid = document.querySelector('.grid');
const body = document.querySelector('body');
const btnReset = document.querySelector('.btnReset');

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

makeGrid(gridSize);


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
})

