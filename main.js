function calc(a, operator, b) {

    function isNotValidOperand (operand1, operand2) {
        return isNaN(operand1) 
        ||    '' === operand1
        
        ||    isNaN (operand2) 
        ||    '' === operand2 
    }
    
  if (isNotValidOperand (a, b)) {
        return 'ERROR'
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


console.log( calc('s', '+', 8) )