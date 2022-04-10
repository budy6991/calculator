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

    else if (operator =="*"){
        return multiply(num1,num2)
    }

    else if (operator =="/"){
        return divide(num1,num2)
    }

}

// Creating the event listeners 

const btns = document.querySelectorAll('button:not(.clear, .equal');
const display = document.querySelector('.display')
const btnClear = document.querySelector('.clear')
const btnEqual = document.querySelector('.equal')


btns.forEach(btn => {
    
    btn.addEventListener('click', (e)=> {
        
        let store = 0;
        let storeTwo = 0;

    if (Number(e.target.textContent) <= 9) {
    store = Number(e.target.textContent)
      display.textContent += store
    storeTwo = display.textContent
    console.log(storeTwo)
    }
    
    else if (e.target.textContent == '+'){
        let storeTwo = Number(display.textContent)
        console.log(operator('+', storeTwo, storeTwo))
    }
    
    });
    
 });

btnEqual.addEventListener('click', (e) => {
    console.log('hey')
})

btnClear.addEventListener('click', (e) => {
   const store = e.target.textContent
   display.textContent = ""
   
})



