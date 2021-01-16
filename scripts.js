const container = document.getElementById('container');

for(let i = 0; i < 16; i++){
    let tempChild = document.createElement('div');
    tempChild.className = "cell";
    tempChild.id = i;
    container.appendChild(tempChild);
}

let cells = Array.from(document.getElementsByClassName('cell'));
console.log(cells[0]);
cells.forEach(cell => cell.addEventListener('mouseover', leaveTrace));

// Functions
function leaveTrace(e){
    console.log(e.target);
    const pixel = document.getElementById(e.target.id);
    pixel.style.backgroundColor = 'green';
}