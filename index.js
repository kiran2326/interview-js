// Q3
console.log(a);
var a = 10
// 
abc();
function abc(){
    console.log("section!!!");
}
// Q5 first class function
let b = function add(){
    console.log("hi");
    return "hello"
}
console.log(b());
// Q6:pure function
function add(c,d){
    return c + d;
}
console.log(add(10,20));
// Q13
const arr = [2,3,4]
const arr1 =[5,6,7]
const arr2 = [...arr,...arr1]
console.log(arr2);

const arr3 = [3,4,5]
function sum(a,b,c){
    return a + b + c;
}
console.log(sum(...arr3))

const obj1 ={
    name : "hi",
    age : 23
}
const obj2 = {
    course:"mern",
    ...obj1,
}
console.log(obj1);
console.log(obj2);

// 
function display(){
let time = new Date();
let hr = time.toLocaleDateString();
let hrs = time.toLocaleTimeString()
console.log(hr);
console.log(hrs);
setTimeout(()=>{
    // display();
},1000)
}
display();
// 
function greet(name,func){
    console.log('hi ${name}');
    // setTimeout(()=>{
    //     func();
    // },2000)
    console.log(func());
  
}
function sum(){
    console.log("hey...");
}
greet('ea23',sum)

// 
const varPromise = new Promise((resolve, reject)=>{
   if(true){
    resolve("this is new Promise one")
   }   
   else{
    reject("promise rejected")
   }
})
function funcPromise(){
    return new Promise((res,rej)=>{
        res("resolve")
    })
}
Promise.all([varPromise,funcPromise()])
    .then((item) =>console.log(...item))
    .catch((err) => console.log(...err))

// 
function sai(Num,timeout){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log(Num);
            res('resolved..')
        },timeout)
    })
}
sai(1,1000)
.then(()=> sai(2,6000))
.then(()=> sai(3,5000))
.then(()=> sai(4,4000))
.then(()=> sai(5,3000))
.then(()=> sai(6,2000))
.then((data)=> console.log('completed'))
// 
function outerFunc() {
    var outerVar = 100;
    function innerFunc() {
    console.log(outerVar);
    }
    return innerFunc;
    }
    var value=outerFunc();
    value();
// function constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
    
    this.greet = function() {
      console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
    };
  }
  
  // Creating objects using the constructor
  var person1 = new Person('John', 25);
  var person2 = new Person('Jane', 30);
  
  // Accessing object properties
  console.log(person1.name); // Output: John
  console.log(person2.age); // Output: 30
  
  // Calling object methods
  person1.greet(); // Output: Hello, my name is John and I am 25 years old.
  person2.greet(); // Output: Hello, my name is Jane and I am 30 years old.
//   call()
function sayHello() {
    console.log('Hello, ' + this.name);
  }
  
  var person = {
    name: 'John'
  };
  
  sayHello.call(person); // Output: Hello, John
// Apply()
function sayHello(greeting) {
    console.log(greeting + ', ' + this.name);
  }
  
  var person = {
    name: 'John'
  };
  
  sayHello.apply(person, ['Hello']); // Output: Hello, John
    // Bind()
    function sayHello(greeting) {
        console.log(greeting + ', ' + this.name);
      }
      
      var person = {
        name: 'John'
      };
      
      var sayHelloToJohn = sayHello.bind(person, 'Hello');
      sayHelloToJohn(); // Output: Hello, John
        // async/await
        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
          }
          
          async function countToThree() {
            console.log('Starting...');
            await delay(1000);
            console.log('1');
            await delay(1000);
            console.log('2');
            await delay(1000);
            console.log('3');
            console.log('Finished!');
          }
          
          countToThree();
    
        //   prototype 

        // Constructor function
function Person(name) {
    this.name = name;
  }
  
  // Adding a method to the prototype
  Person.prototype.greet = function() {
    console.log('Hello, my name is ' + this.name);
  };
  
  // Creating objects using the constructor
  var person1 = new Person('John');
  var person2 = new Person('Jane');
  
  person1.greet(); // Output: Hello, my name is John
  person2.greet(); // Output: Hello, my name is Jane
 
//   prototype chaining

// Parent object
var parent = {
    name: 'John',
    greet: function() {
      console.log('Hello, my name is ' + this.name);
    }
  };
  
  // Child object
  var child = Object.create(parent);
  child.name = 'Jane';
  
  child.greet(); // Output: Hello, my name is Jane
  