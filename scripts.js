// Default values
const DEF_SIZE = 10;
const DEF_BASE_COLOR = 'lightgray';
const DEF_HOVER_COLOR = 'gray';



// Create grid
createGrid(DEF_SIZE);
container.style.gridTemplateColumns = `repeat(${DEF_SIZE}, 1fr)`;
container.style.gridTemplateRows = `repeat(${DEF_SIZE}, 1fr)`;


// Add a event listener to every cell
let cells = Array.from(document.getElementsByClassName('cell'));
cells.forEach(cell => cell.addEventListener('mouseover', leaveTrace));



// FUNCTIONS and BUTTONS

// Build a grid of size x size 
function createGrid(size){
// Add div elements to the container
const container = document.getElementById('container');
for(let i = 0; i < DEF_SIZE * DEF_SIZE; i++){
    let tempChild = document.createElement('div');
    tempChild.className = "cell";
    tempChild.style.backgroundColor = DEF_BASE_COLOR;
    tempChild.id = i;
    container.appendChild(tempChild);
}
}

// Leave trace
function leaveTrace(e){
    console.log(e.target);
    const pixel = document.getElementById(e.target.id);
    pixel.style.backgroundColor = DEF_HOVER_COLOR;
}

// Clear button
clear = document.getElementById('clear-button');
clear.addEventListener('click', () => {
    console.log('jdjdjdjd');
    cells.forEach(cell => cell.style.backgroundColor = DEF_BASE_COLOR);
});

// Resize button
let resize = document.getElementById('resize-button');
resize.addEventListener('click', () =>{
    const newSize = prompt("Cell per edge:");


});