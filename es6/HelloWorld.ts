// function sayHello(name: string): void {
//     console.log(`Hello ${name}!`);
//   }
  
//   sayHello('Dave');


// Var Hoisting and functional scope

// var used hoisting concept and it is functional scope
// function greetPerson(name){
//     if (name=="Chandler")
//     {
//         var greet= "Hello " + name   
//     }
//     else
//     {
//         var greet= "Hi there!"
//     }
//     console.log(greet)
// }

// greetPerson('Chandler')



// let is block scope and doesn't use the concept of hoisting and it cannot be redeclared
function greetPerson(name){
    let greet;
    if (name=="Chandler")
    {
        greet= "Hello " + name   
    }
    else
    {
        greet= "Hi there!"
    }
    console.log(greet)
}

greetPerson('Chandler')


var a=1
var b=2

if (a===1)
{
    var a=10
    let b=20
    console.log(a)
    console.log(b)
}
console.log(a)
console.log(b)