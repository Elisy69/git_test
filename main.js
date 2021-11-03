function calc(a, operator, b) {

    function operandIsNotValid (operand1, operand2) {
        return isNaN(operand1) 
        ||    '' === operand1
        
        ||     isNaN(operand2) 
        ||    '' === operand2 
    }
    
  if (operandIsNotValid (a, b)) {
        return 'ERROR'
    }

  if (operator === "/" && b === 0) {
        return 'DIVIDE BY ZERO ERROR'
    }

    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '/':
            result = a / b;
            break;
        case '*':
            result = a * b;
            break;
        case '**':
            result = a ** b;
            break;

        default:
            return 'UNKNOWN OPERATOR'
     }
     return result
}   


console.log( calc(10, '/', 0) )
