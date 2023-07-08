// select the calculator body and append buttons for later use
const buttons = document.querySelector(".buttons");
const symbols = ["7", "8", "9", "÷", "4", "5", "6", "x", "1", "2", "3", "-", "0", ".", "=", "+"]
let count = 0;

for (let i=0; i<4; i++) {
    const buttonRow = document.createElement('div');
    buttonRow.classList.add('buttonRow')
    for (let j=0; j<4; j++) {
        const button = document.createElement('button');
        button.classList.add('buttonItem');
        button.style.height = (8 + 'rem');
        button.style.width = (8 + 'rem');
        button.style.background = 'yellow';
        button.textContent = (symbols[count])
        button.style.fontSize =("35px")
        buttonRow.appendChild(button);
        count += 1
    }
    buttons.appendChild(buttonRow);
}


const eachButton = document.querySelectorAll("button").forEach(item => {
    item.addEventListener('click', function() {
        console.log(item.textContent)
    })
})

