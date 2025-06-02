// NULL sometimes converts to 0 and sometimes NaN
// console.log(null >0)//false
// console.log(null ==0)//false (EQUALITY CHECK AND COMPARISON BOTH ARE DIFFERENT THINGS IN JS)
// console.log(null >=0)//it converts null to number, as 0 that's why it is TRUE

//normal check
// console.log("22"> 21);//true
// console.log("02" < 1);//false
// console.log("02" == 2);//returns true
// we have to avoid null and undefined conversions 

//strict check
// console.log("22" === 22);//returns false because it checks datatype also

/////////////////////
// datatype
// kis tarah se data ko memory me rkha jata hai or access kiya jata iske basis pe 2 tarah ke ddatatype hote
// PRIMITIVE AND NON-PRIMITIVE

// primitive(call by value)-STRING,NUMBER,NULL,BOOLEAN ,UNDEFINED,SYMBOL,BigInt
// number(int,float,etc)
const score=100;
const score1=100.34;

const isLoggedIn=false;  //boolean
// console.log(isLoggedIn);

const outside= null;//null

let email; //undefined
// IN SYMBOL WE HAVE USED SAME INPUT BUT both are DIFFERENT
const id= Symbol('123');
const anotherId = Symbol('123')
// console.log(id== anotherId);

const bigNumber=292020239203n;//bigInt


// non-primitive(reference type)-arrays, objects, functions
const heros=['doraemon','bheem'];
// console.log(heros);

let objj={
    name:'amaaan',
    class:12,
    subjects:["maths","science",122]
}
// console.log(objj.name);
// console.log(objj);

function nothing(a,b) {
    return a+b;
}
console.log(nothing(12,12));

console.log(typeof heros);//object

///////////////////////////
// CONCEPT OF MEMORY
// primitive type use stack memory(we get a copy here)
// non primitive use heap memory(here we got refrence of the original)

// primitive type
let myName1="fuzail"
let myName2=myName1

myName2="mehtab"
console.log(myName1)//here name remains same because the copy of name1 pass to the name2(it uses stack)
console.log(myName2)


// non primitive type
let obj1={
    name:"ayush",
    email:"ayush@gmail.com"
}
let obj2=obj1;
obj2.email="himanshu@gmial.com"
console.log(obj1.email)//it does not passes copy it is reference type//BOTH PRINTS himanshu@gmail
console.log(obj2.email) 

