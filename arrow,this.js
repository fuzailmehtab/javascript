const user={
    username:"ashish",
    price:300,
    
    welcomeMessage: function(){
        console.log(`${user.username} , welcome here!`)
        console.log(user)//this keyword represents the currennt context
    }
}
// user.welcomeMessage()
// user.username="amaan"
// user.welcomeMessage()


// function chai(){
//     let username="shurya"
//     console.log(this.username)
// //THIS keyword gives us undefined here but it works properly in object
// }
// chai()

const chai1= function(){
    let username="harman"
    console.log(this.username);//undefined
}
// chai1();
//////////
// chai2 =()=>{
//     let name="ayush"
//     console.log(this.name)//undefined
// }
// chai2()

// TEENO FUNCTION ME HEE HAME(THIS) UNDEFINED VALUE MILTI HAI

///////////////////////////////////////////////////////
// addTwo =(num1,num2)=>{
//     return num1+num2 //explicit return (return use karte hain)
// }

addTwo =(num1,num2)=> num1+num2 //implicit (no return)

addTwo =(num1,num2)=> (num1+num2)

// object return karne ke liye
addTwo =(num1,num2)=> ({username:"ayaan"})
// console.log(addTwo(21,11) )

// const myArray=[2,22,32,43]
// myArray.forEach


// /////////////////////////////////
