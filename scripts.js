const container = document.getElementById('container');

for(let i = 0; i < 16; i++){
    let tempChild = document.createElement('div');
    tempChild.className = "cell";
    container.appendChild(tempChild);
}

// Functions