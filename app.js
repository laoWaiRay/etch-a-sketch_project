const h1 = document.querySelector('h1');
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

const colorPickerLabel = document.querySelector('.colorPickerLabel')
const colorPickerInput = document.querySelector('.colorPickerInput')


colorPickerInput.defaultValue = '#ffffff';
colorPickerInput.value = '#ffffff';
let currentColor = colorPickerInput.value;


colorPickerInput.onchange = (e) => {
    currentColor = `${colorPickerInput.value}`;
    colorPickerLabel.style.backgroundColor = currentColor;
    h1.style.color = currentColor;
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
        square.addEventListener('mousemove', function(e){
            if(mouseActive === true) {
                console.log(e.target)
                e.target.style.backgroundColor = currentColor;
            }
        })
        square.addEventListener('mousedown', function(e){
            console.log(e.target)
            e.target.style.backgroundColor = currentColor;
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
        square.style.backgroundColor = '';
    }
})

