// select the calculator body and append buttons for later use
const buttons = document.querySelector(".buttons");
const symbols = ["7", "8", "9", "÷", "4", "5", "6", "x", "1", "2", "3", "-", "0", ".", "=", "+"]
const numbers = ["7", "8", "9", ".", "4", "5", "6", "1", "2", "3", "0"]
const operators = ["x", "÷", "-", "+"]
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


const eachButton = document.querySelectorAll(".buttonItem").forEach(item => {
    item.addEventListener('click', function() {
        const typing = document.querySelector(".prints");

        //typing.textContent += item.textContent;
        if (operators.includes(typing.textContent[0])) {
            typing.textContent = ""
        }

        if (numbers.includes(item.textContent)) {
            typing.textContent += item.textContent;
        };

        if (operators.includes(item.textContent)) {
            typing.textContent = "" 
            typing.textContent += item.textContent;
        }
    })
})


// function for each operator
const add = function(x, y) {
	return parseFloat(x) + parseFloat(y);
};

const subtract = function(x, y) {
	return parseFloat(x) - parseFloat(y);
};

const multiply = function(x, y) {
    return parseFloat(x) * parseFloat(y);
};

const divide = function(x, y) {
    return (parseFloat(x) / parseFloat(y)).toFixed(2);
}

// operator function
const operator = function(num1, oper, num2) {
    if (oper === "+") {
        return add(num1, num2);
    } else if (oper === "-") {
        return subtract(num1, num2);
    } else if (oper === "x") {
        return subtract(num1, num2);
    } else if (oper === "÷") {
        return divide(num1, num2);
    }  
}


console.log(add('5',7))
console.log(subtract(5,7))
console.log(multiply(5,7))
console.log(divide(14,5))

console.log(operator(10, '+', 5))