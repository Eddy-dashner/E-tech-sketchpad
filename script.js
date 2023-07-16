let containerDiv = document.querySelector('.container');
let userValue = document.getElementById('user-number');
let userSubmit = document.getElementById('user-submit');
let promptText = document.getElementById('prompt');
let copyInput = document.getElementById('copy-input');
let clearButton = document.getElementById('clear-button');

userValue.addEventListener('focus', entryHint);
userValue.addEventListener('keyup', duplicateGrid);
userSubmit.addEventListener('click', makeGrid);
clearButton.addEventListener('click', clearGrid);

makeGrid();
draw();


function duplicateGrid() {
    let userGrid = userValue.value;
    copyInput.textContent = "x " + userGrid;
}

function entryHint() {
    promptText.textContent = "Enter a number between 2 and 99.";
}
function makeGrid() {
    let number = userValue.value;
    if (number < 0 || number > 99 || isNaN(number)) {
        promptText.textContent = "Make sure it's a number from 2 to 99!";
    } else {
        promptText.textContent = "";
        copyInput.textContent = "";
        userValue.value = "";
        containerDiv.innerHTML = "";
        if (number == 0 || number > 99 || number == "") {
            for (let i = 0; i < 10; i++) {
                let row = document.createElement('div');
                row.classList.add('row');
                containerDiv.appendChild(row);
                for (let k = 0; k < 10; k++) {
                    let column = document.createElement('div');
                    column.classList.add('column')
                    row.appendChild(column);
                }
            }
        } else {
            for (let i = 0; i < number; i++) {
                let row = document.createElement('div');
                row.classList.add('row');
                containerDiv.appendChild(row);
                for (let k = 0; k < number; k++) {
                    let column = document.createElement('div');
                    column.classList.add('column')
                    row.appendChild(column);
                }
            }
        }
    }
    draw();
}
function draw() {
    let columns = document.getElementsByClassName("column");
    for (let i = 0; i < columns.length; i++) {
        columns[i].addEventListener("mouseover", changeColor);
    }

    function changeColor() {
        let blackRadio = document.getElementById('black-pen');
        let redRadio = document.getElementById('red-pen');
        let blueRadio = document.getElementById('blue-pen');
        let rainbow = document.getElementById('rainbow');
        let eraserRadio = document.getElementById('eraser');

        if (blackRadio.checked) {
            this.style.backgroundColor = '#2e2b2b';
        } else if (redRadio.checked) {
            this.style.backgroundColor = '#da2d2d'
        } else if (blueRadio.checked) {
            this.style.backgroundColor = "#3f33dd"
        } else if (eraserRadio.checked) {
            this.style.backgroundColor = ''
        } else if (rainbow.checked) {
            let randomColor = Math.floor(Math.random() * 16777215).toString(16);
            this.style.backgroundColor = "#" + randomColor;
        }
    }
}

function clearGrid() {
    let columns = document.getElementsByClassName("column");
    for (let i = 0; i < columns.length; i++) {
        columns[i].style.backgroundColor = '';
    }
}
