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