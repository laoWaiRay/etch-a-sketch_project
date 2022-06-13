const grid = document.querySelector('.grid');
const body = document.querySelector('body');
const btnReset = document.querySelector('.btnReset');
const btnClear = document.querySelector('.btnClear');


// Changing CSS file directly through DOM
const stylesheet = document.styleSheets[0];
let elementRules__squareHover;
let elementRules__colorSquare;

for(let i = 0; i < stylesheet.cssRules.length; i++) {
    if(stylesheet.cssRules[i].selectorText === '.square:hover') {
      elementRules__squareHover = stylesheet.cssRules[i];
    }
    if(stylesheet.cssRules[i].selectorText === '.colorSquare') {
        elementRules__colorSquare = stylesheet.cssRules[i];
    }
}
///////////////////////////////////////////

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

colorPickerInput.onchange = () => {
    colorPickerLabel.style.backgroundColor = `${colorPickerInput.value}`;
    console.log('changedvalue');
    elementRules__squareHover.style.setProperty('background-color',`${colorPickerInput.value}`, 'important');
    elementRules__colorSquare.style.setProperty('background-color',`${colorPickerInput.value}`, 'important');
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

