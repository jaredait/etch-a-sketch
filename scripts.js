// Default values
const DEF_SIZE = 10;
const DEF_BASE_COLOR = 'lightgray';
const DEF_HOVER_COLOR = 'gray';

// Create initial grid
const container = document.getElementById('container');
createGrid(DEF_SIZE);


// FUNCTIONS and BUTTONS

// Build a grid of n x n (where n is the size parameter)
function createGrid(size){
    // Add div elements to the container
    const container = document.getElementById('container');
    for(let i = 0; i < size * size; i++){
        let tempChild = document.createElement('div');
        tempChild.className = "cell";
        tempChild.style.backgroundColor = DEF_BASE_COLOR;
        tempChild.id = i;
        container.appendChild(tempChild);
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        setHoverEffect();
    }
}

// Leave trace
function leaveTrace(e){
    console.log(e.target);
    const pixel = document.getElementById(e.target.id);
    pixel.style.backgroundColor = DEF_HOVER_COLOR;
}

function setHoverEffect(){
    // Add a event listener to every cell
    let cells = Array.from(document.getElementsByClassName('cell'));
    cells.forEach(cell => cell.addEventListener('mouseover', leaveTrace));
}

// Clear button
clear = document.getElementById('clear-button');
clear.addEventListener('click', () => {
    let cells = Array.from(document.getElementsByClassName('cell'));
    cells.forEach(cell => cell.style.backgroundColor = DEF_BASE_COLOR);
});

// Resize button
let resize = document.getElementById('resize-button');
resize.addEventListener('click', () =>{
    const newSize = prompt("Cell per edge:") || DEF_SIZE;
    if(newSize >= 0 && newSize <= 50){
        const cells = Array.from(document.getElementsByClassName('cell'));
        for(let i = cells.length - 1; i >= 0; i--){
            container.removeChild(cells[i]);
        }
        console.log(container.childElementCount);
        createGrid(newSize);
    }
    else alert('Invalid input. Max number = 50');
});