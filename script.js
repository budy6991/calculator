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


function operator(operator, num1, num2) {

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

let store = 0;
let storeTwo = 0;
let storeThree =0;
let operation = '';
let pairOfNumbers = 0;
let result = 0;

btns.forEach(btn => {
    
    

    btn.addEventListener('click', (e)=> {
        
        

    if (Number(e.target.textContent) <= 9 && operation == '') {
    store = Number(e.target.textContent)
    display.textContent += store
    storeTwo = Number(display.textContent)
    }
    
    else if (e.target.textContent == '+' || e.target.textContent == '-' || e.target.textContent == 'x' || e.target.textContent == '/' ){
        display.textContent = ''
        operation = e.target.textContent
        
        
    }

    else if (Number(e.target.textContent) <= 9) {
        
        store = Number(e.target.textContent)
        display.textContent += store
        storeThree = Number(display.textContent)
        
        }
    
    
    else if (e.target.textContent == '='){
      display.textContent = (operator(`${operation}`, storeTwo, storeThree))
        storeTwo = (operator(`${operation}`, storeTwo, storeThree))
        pairOfNumbers = storeTwo
        console.log(pairOfNumbers)
        
    }

    else if (e.target.textContent == '+' || e.target.textContent == '-' || e.target.textContent == 'x' || e.target.textContent == '/' ){
        display.textContent = pairOfNumbers
        operation = e.target.textContent
    }

    else if (Number(e.target.textContent) <= 9) {
        
        store = pairOfNumbers
        display.textContent += store
        result = Number(display.textContent)
        
        }
        
    else if (e.target.textContent == 'AC'){
        store = 0;
        storeTwo = 0;
        storeThree =0;
        operation = '';
        display.textContent = ""
    }

    

    });
    
 });


//The calculator should not evaluate more than a single pair of numbers at a time 







