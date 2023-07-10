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

let total = "placeholder";
let oper2Use = "";
console.log(total, "at start");

const eachButton = document.querySelectorAll("button").forEach(item => {
    item.addEventListener('click', function() {
        // select both displays 
        const typing = document.querySelector(".prints");
        const equals = document.querySelector(".equals");

        console.log("this is curr total = ", total, "key clicked was ", item.textContent);

        if (item.textContent === "Clear") {
            typing.textContent = "";
            equals.textContent = "";
            total = "placeholder"
        }

        if (item.textContent === "=") {
            console.log("current num 1 is ", total);
            console.log("current operator is ", oper2Use);
            console.log("current num 2 is ", parseFloat(typing.textContent));
            total = operator(total, oper2Use, parseFloat(typing.textContent));
            equals.textContent = (total);
            typing.textContent = "";
        }

        // if the button text content is a number or period add it to the display string
        // enters only when first number isn't saved 
        if (total === "placeholder" && !operators.includes(item.textContent)) {
            console.log("entered the loop where total is a string")
            if (numbers.includes(item.textContent)) {
                typing.textContent += item.textContent;
            };
        } 
        // enters this loop if total is holding and int and click is a number
        if (!isNaN(total) && numbers.includes(item.textContent)) {
            console.log("only enters this if total is an int and whats being clicked is a number")
            if (operators.includes(typing.textContent[0])) {
                typing.textContent = "";
            }
            typing.textContent += item.textContent;
        }

        // sets up the display and calls operatior
        // enters when firs operator is entered and after to write all other numbers 
        if (operators.includes(item.textContent)) {
            if (typing.textContent === "") {
                // console.log(typing.textContent[0]);
                // console.log(typing.textContent === "");
                alert("please enter a number")
            } else if (operators.includes(typing.textContent[0])) {

                typing.textContent = "";
                typing.textContent = item.textContent;
                oper2Use = item.textContent;
                console.log(oper2Use);
            } else {
            
                // means this is the first number
                if (total === "placeholder") {

                    // total holds the number after parsing the string in display 
                                
                    oper2Use += item.textContent;
                    console.log("this operator has been entered", oper2Use);
                    console.log("we enterd the loop to set the  first num");

                    total = parseFloat(typing.textContent);
                    console.log("the new total should be =", total, "if we set it right");
                    equals.textContent = parseFloat(total);
                    console.log("we changed the equals display to curr total =>", total);

                } else {
                    console.log("we've enter the loop where operator has been clicked and total isn't a str")
                    console.log("current num 1 is ", total);
                    console.log("current operator is ", oper2Use);
                    console.log("current num 2 is ", parseFloat(typing.textContent));

                    total = operator(total, oper2Use, parseFloat(typing.textContent));
                    console.log(total);
                    equals.textContent = (total);
                    oper2Use = item.textContent;
                    console.log("operator to use next time", oper2Use);
                }
                typing.textContent = "";
                typing.textContent = item.textContent;
            };
        };
    });
});

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
        return multiply(num1, num2);
    } else if (oper === "÷") {
        return divide(num1, num2);
    }  
}


// console.log(add('5',7))
// console.log(subtract(5,7))
// console.log(multiply(5,7))
// console.log(divide(14,5))

// console.log(operator(10, '+', 5))