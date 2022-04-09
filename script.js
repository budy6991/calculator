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
      const store = e.target.textContent
      return display.textContent += store
        
    });

 });


btnClear.addEventListener('click', (e) => {
   const store = e.target.textContent
   display.textContent = ""
})

