// function addTwoNumbers(number1,number2) {
//     console.log(number1+number2 )
// }
// const result=addTwoNumbers(12,12)
// console.log("result:",result)//it gives undefined
// addTwoNumbers("4",32)//it gives 432

// function addTwoNumbers(number1,number2){
//     return number1+number2
// }
// const result=addTwoNumbers(12,12)
// console.log("result:",result)

function loginUSERmessage(username){
    if(username===undefined){
        console.log("pls enter username")
        return
    }
    return`${username} just logged in`
}
// console.log(loginUSERmessage())//it gives undefined
// console.log(loginUSERmessage("adarsh"))

////////////////////////
////////////////////////

function calculateCartPrice(...num1){///rest operator-function me multiple value pass krne ke liye
    return num1;
}
console.log(calculateCartPrice(21,32,31))

////creating object and handling with functions
const user={
    name:"hitesh",
    price:929
}
function handleObject(user){
    console.log(`username is ${user.name} and price is ${user.price}`)
}
// handleObject(user)
//sometime creating direct object here 
handleObject({
    name:"amaan",
    price:3200
})

// creating an array and handling with functions
const newArray=[200, 400 ,500]
function returnSecondValue(newArray){
    return newArray[1]
}
// console.log(returnSecondValue(newArray))
console.log(returnSecondValue([200,300,100]))
