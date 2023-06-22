## Q2. What are the differences between var, let and const?

### var - 
    1. Redeclare and reinitilized
    2. Global scope and Function Scope
    3. Hoisting
    4. Used before introduce ES6
### let
    1. not Redeclare and reinitilized
    2. no Hoisting
    3. Block scope, Global Scope
    4. TDZ
    5. introduce in ES6
### const
    1. not Redeclare and Not reinitilized 
    2. no Hoisting
    3. Block scope, Global Scope
    4. TDZ
    5. introduce in ES6

## Type of Scope
1. Global Scope
2. Function Scope
3. Block Scope

## Q3. Hoisting - Hoisting is the js mechanism where var and function declaration are moved to top of their scope before code execution.
    1. function Hoisting
    2. var keyword Hoisting
## Q4. What is a Temporal Dead Zone (TDZ)?
    - when trying to acceess a variable before it's decleration with let and const keyword.
    - introduce to imporve the code quality by detecting & preventing to use variable.
## Q5. What is meant by first class functions?
    - Assign a function to a variable is first class function.
## Q6 . Pure Function - A pure function in JavaScript is a function that returns the same result if the same arguments(input) are passed in the function.
---
## Q7. Execution Context

    - This is for Synchronous JavaScript
    1. Global Execution Context
    2. Function Execution context
    3. Memory Allocation
    4. Code Execution 
    5. Call Stack
   
    - Asynchronous JavaScript
    1. Event Loop
    2. Callback queue
    3. Microtask Queue
    4. Call Stack

---
#  June 19th

## Chrome - V8 Engine
## Safari - JavaScriptCore (Nitro)
## Firefox - Spider Monkey

## What is the spread operator?
    - Spread operator allows us to destructure the non-primitive datatype like object and array to access elemnets individually.
    - The spread operator is a feature in JavaScript that allows an iterable (such as an array or a string) to be expanded into individual elements. The spread operator is denoted by three dots (...).
    - The JavaScript spread operator ( ... ) allows us to quickly copy all or part of an existing array or object into another array or object.

## What is use of setTimeout?
    - it is used to delay the output with given time.
    - The setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.
## What is setInterval?
    - They are going to excute the code after given time peroid.
  
## What are callbacks?
    - A function that can pass inside another function as an argument.
    - A callback is a function that passed as an argument to another function.
## Callback Hell
    - Callback Hell is essentially nested callbacks stacked below one another forming a pyramid structure.

## Difference between undefined vs not defined vs NaN?
1. undefine - variable dec. but not init.
2. not define - variable is not declear.
3. NaN - Not a Number

# day 3 - 20th june 2023
   -Promise are used to handle async operations in JS. easy ti handle callback hell
   -These are used to handle the errors
   -basically in promise there are three stages
    1. pending
    2. resolve - (.then method)
    3. reject - (.catch method)
   - initial stage of any promise is always pending. 
    
    for example:
    const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'Promise 1');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'Promise 2');
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(reject, 1500, 'Promise 3 Error');
});

Promise.all([promise1, promise2, promise3])
  .then(values => {
    console.log('All promises resolved:', values);
  })
  .catch(error => {
    console.log('Error occurred:', error);
  });
## What is promise chaining?
 - its a technique to chain multiple asynchronus operation together using promises.
 - Promise chaining is a technique in JavaScript to execute multiple asynchronous operations in a specific order by chaining promises together using the .then method
 - Multiple .then method.

 ## DOM - Document Object Model
  -Document Object Model . basically it is javascript mechanism by which we can change the document structure , style ,and content.
  -Different methods in Dom
    -Id - getElementBYId - return unique value
    -query selector- return unique value
    -class - getElementBYClassName
    -tag Name - getElementsByTagName

    -querySelectorAll

    -addEventListener - (event , callback function)
## closure -
   -child function can access variables of  parent lixical environment called "closure".
## function consructor
  - A function constructor is a way to create a object using function as a blue print or template.
  - it allow you to define a reusable structure for creating multiple objects with similar properties and method. 
## call() , Apply() , Bind() -
These three are methods are used to invoke a function where we are supposed to pass an object as first argument and at the time of definition we dont have mention this object as a parameter and we can access the values of objects by using this keyword in function definition.
- Call() :
 - The call method is used to invoke a function with specific "this" value & argumnets provide individually.
 - The call() method invokes a function in which first arguments will be the object and the rest will be as an individual arguments.
- Apply() :
  - It is similar to the call() method but it takes arguments as an array
  - The Apply() method invokes a function in which first arguments will be the object and the rest will be as an array.
- Bind() :
  - It is a function that helps you create another function that you can execute later with the new context of this is provided.

## async/await:
The async/await keywords are used in JavaScript to handle asynchronous operations in a more synchronous and readable manner. They provide a way to write asynchronous code that looks and behaves more like synchronous code, making it easier to understand and maintain.
## prototype :
