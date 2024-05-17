function calcuator(num, num2, operator) {
 return  operator === '+' ? num + num2 : operator === '-' ? num - num2 : operator === '*' ? num * num2 : operator === '/' ? num / num2 : 'Invalid operator';
  
}


console.log(calcuator(2, 3, '*'))
console.log(calcuator(2, 10, '+'))
console.log(calcuator(2, 3, '-'))
console.log(calcuator(10, 5, '/'))
console.log(calcuator(10, 5, 'a'))
console.log(calcuator(10, 5, 'b'))

 
 
 


