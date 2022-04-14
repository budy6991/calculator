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

const display = document.querySelector('.display')
const operators = document.querySelectorAll('.btn-operator')
const numbers = document.querySelectorAll('.btn-number')
const equalTo = document.querySelector('.equal')
const clear = document.querySelector('.clear')


    let previousOperand = 0;
    let nextOperand = 0;
    let operation = '';
    let statusOperation = false
    let result = 0;

    clear.addEventListener('click', (e) => {
        previousOperand = 0;
        nextOperand = 0;
        operation = '';
        result = 0;
        display.textContent = ''
        statusOperation = false
    })
    
    
    //We input the first number
    
    numbers.forEach(numbers => {

        numbers.addEventListener('click', (e) => {
            nextOperand = e.target.textContent
            display.textContent += nextOperand
            nextOperand = Number(display.textContent)
            console.log(nextOperand)

            //Once the operator is selected, we input the nextOperand, which will become the previous operator 

            if (operation != ''){
                nextOperand = Number(display.textContent)
                    display.textContent = nextOperand
                    statusOperation = true
                }

        
            })
            
})

    operators.forEach(operator => {
        
        operator.addEventListener('click', (e) => {
                

            //We select the operator, and switch the nextOperand to the previous operator 

            if ((e.target.textContent == '+' || e.target.textContent == '-' ||e.target.textContent == 'x' || e.target.textContent == '/') && statusOperation == false) {
                operation = e.target.textContent
                    display.textContent = '';
                    console.log(operation)
                    previousOperand = nextOperand
                    console.log(previousOperand)
                    
                }
            
                else if (statusOperation == true && (e.target.textContent == '+' || e.target.textContent == '-' ||e.target.textContent == 'x' || e.target.textContent == '/')){
                    nextOperand = operate(operation, previousOperand, nextOperand)
                    console.log(nextOperand)
                }
                
            })

        })
        
        
        equalTo.addEventListener('click', (e) => {
            result = operate(operation, previousOperand, nextOperand)
            display.textContent = result
        })

