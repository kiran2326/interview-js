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
    console.log('hi$'{name});
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