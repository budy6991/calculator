//Creates the functions for the operations

function add(x,y){
    return x + y
}

function substract (x,y){
    return x - y
}

function multiply (x,y){
    return x*y
}

function divide (x,y){
    return x/y
}

//Creates the function based on the operator selected


function operate(operator, num1, num2) {

    if (operator =="+"){
        return add(num1,num2)
    }

    else if (operator =="-"){
        return substract(num1,num2)
    }

    else if (operator =="x"){
        return multiply(num1,num2)
    }

    else if (operator =="/"){
        return divide(num1,num2)
    }

}



// Creating the event listeners 

const btns = document.querySelectorAll('button');
const display = document.querySelector('.display')
const btnClear = document.querySelector('.clear')
const btnEqual = document.querySelector('.equal')

    let firstInput = 0;
    let secondInput = 0;
    let operation = '';



btns.forEach(btn => {
    
    btn.addEventListener('click', (e)=> {
        
        //Gets the first input

    if (Number(e.target.textContent) <= 9 && operation == '') {
        firstInput = Number(e.target.textContent)
        display.textContent += firstInput
        firstInput = Number(display.textContent)    
    }

        //Gets the operator
    
    else if (e.target.textContent == '+' || e.target.textContent == '-' || e.target.textContent == 'x' || e.target.textContent == '/' ){
        display.textContent = ''
        operation = e.target.textContent
        
    }

        //Gets the second input

    else if (Number(e.target.textContent) <= 9) {
        
        secondInput = Number(e.target.textContent)
        display.textContent += secondInput
        secondInput = Number(display.textContent)
            
        }

        //Gets the total value
    
    else if (e.target.textContent == '='){
        
        console.log(e.target.textContent)
        display.textContent = (operate(operation, firstInput, secondInput))
        firstInput = (operate(operation, firstInput, secondInput))
        console.log(firstInput)

    }

    
    else if (e.target.textContent == 'AC'){
        firstInput = 0;
        secondInput = 0;
        operation = '';
        display.textContent = ""
    }

    });
    
 });



