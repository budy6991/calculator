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

// Selecting the buttons the event listeners 

const display = document.querySelector('.display')
const operators = document.querySelectorAll('.btn-operator')
const numbers = document.querySelectorAll('.btn-number')
const equalTo = document.querySelector('.equal')
const clear = document.querySelector('.clear')

// Initializing the variables to null or empty

    let previousOperand = null;
    let nextOperand = null;
    let operation = '';
    let result = null;


    // Clear button > event listener

    clear.addEventListener('click', (e) => {
        previousOperand = null;
        nextOperand = null;
        operation = '';
        result = null;
        display.textContent = ''
    })
        
    // Operator > event listeners.

    operators.forEach(operator => {

        //Inputs the first operation if the first number was inputed. (2)
        
        operator.addEventListener('click', (e) => {
            
            if (operation == '') {

            display.textContent = ''
            operation = e.target.textContent         
            previousOperand = nextOperand
            console.log(operation)

        }

        //If we have (previous & next operand & a operand), it inputs a new operator and gets the result of the previous calculation. (4)

            else if (operation != '' &&  nextOperand != null ) {

                display.textContent = ''
                previousOperand = operate(operation, previousOperand, nextOperand)
                operation = e.target.textContent
                console.log(previousOperand)      
                                            
            }
        })

            
        
    })

    //Numbers > event listeners.
    
    numbers.forEach(numbers => {

        numbers.addEventListener('click', (e) => {

            //Inputs the first number (1)

            if (previousOperand == null && operation == ''){
            
            nextOperand = e.target.textContent
            display.textContent += nextOperand
            nextOperand = Number(display.textContent)
            console.log(nextOperand)
                
            }

            //Inputs the second number if an operation and a previous number exist.(3)

            else if (operation != '' && previousOperand != null){
                
                nextOperand = e.target.textContent
                display.textContent += nextOperand
                nextOperand = Number(display.textContent)
                
            }


        })
            
    })
    
    // Equal To > event listener. 

    equalTo.addEventListener('click', (e) => {
            result = operate(operation, previousOperand, nextOperand)
            display.textContent = result
        })

