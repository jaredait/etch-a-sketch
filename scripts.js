// Add a square grid of div elements
const container = document.getElementById('container');
for(let i = 0; i < 16; i++){
    let tempChild = document.createElement('div');
    tempChild.className = "cell";
    tempChild.id = i;
    container.appendChild(tempChild);
}

// Add a event listener to every cell
let cells = Array.from(document.getElementsByClassName('cell'));
cells.forEach(cell => cell.addEventListener('mouseover', leaveTrace));



// FUNCTIONS
function leaveTrace(e){
    console.log(e.target);
    const pixel = document.getElementById(e.target.id);
    pixel.style.backgroundColor = 'green';
}

clear = document.getElementById('clear-button');
clear.addEventListener('click', () => {
    console.log('jdjdjdjd');
    cells.forEach(cell => cell.style.backgroundColor = 'palevioletred');
});