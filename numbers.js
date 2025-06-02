// NORMAL WAY TO DEFINE A NUMBER
// const score =404
// console.log(score)

const score1= new Number(2020)
// console.log(score1)
// console.log(score1.toString())//string ban gya hai ab string methods use kr skate hai
// console.log(score1.toString().length) 
// console.log(score1.toFixed(2)) //used for including decimal values

const number2= 23.87;
// console.log(number2.toPrecision(3))//prescision me jo number dete vo hota hai kitni value par hame focus krna hai

const hundreds=1000000;
// console.log(hundreds.toLocaleString())//american standardn based
// console.log(hundreds.toLocaleString('en-IN'))//indian standard

////////////////////////MATHS//////////////////
// console.log(Math)
// console.log(Math.abs(-44))//change from -ive to +ive
// console.log(Math.round(8.6))//round off
// console.log(Math.ceil(8.1))//top number
// console.log(Math.floor(8.6))//less number
// console.log(Math.sqrt(4))//square root
// console.log(Math.min(10,2,6,4))

// console.log(Math.random())//0 or 1 ke bich me
console.log((Math.random()*10) + 1)

console.log(Math.floor(Math.random()*10)+1) //1 add islay kra h kyuki sometime ye value dega 0.01*10=0.1 ye floor de dega 0 ,thats why add 1
const min=10;
const max=20;

console.log(Math.floor((Math.random()*(max-min+1)))+min);//min last me isleay add kiya kyuki value uski 10 se kam aa rhi thi