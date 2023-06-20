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
console.log(b);
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
    setTimeout(()=>{
        func();
    },2000)
  
}
function sum(){
    console.log("hey...");
}
greet('ea23',sum)