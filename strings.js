let name="fuzail"
const number=43;
// console.log(name+number+"/08");
// nowadays no one uses these things

// console.log(name.__proto__)
// console.log(name.length) 

// we use backtick
console.log(`hello my name is ${name.toUpperCase()} and my number is ${number}`)

// different way of defining string
const gameName= new String('tekken')
// console.log(gameName)
// console.log(gameName[0])//gives 1st elemt(0th index)
// console.log(gameName.__proto__);//protottype is object
// console.log(gameName.length)//length-6
// console.log(gameName.concat("3"))//adds 3 to string
// console.log(gameName.charAt(4))//to find characyer 
// console.log(gameName.indexOf('k'))//to find index
// console.log(gameName.substring(0,3))//it doesnot take 3rd letter, 0 se lekar 2nd tak jaega
// console.log(gameName.slice(-4,4))//we can use negative numbers here
// console.log(gameName.slice(2))


const website="https://www.aman%303chodhary.com"
// console.log(website.replace('%303','-'))
// console.log(website.replace("aman","mahesh"))
// console.log(website.includes('aman'))//checks the string

console.log(gameName.concat(" is a game of fighting and thier website is " ,website , "  OK"))

const string1="       raman     "
// console.log(string1)
// console.log(string1.trim())
// console.log(string1.trimStart())

// split function-it is used to split the string
const game="aryya jsuaka jiiy"
const game1="dara-0jsuaka-iiy"
// console.log(game.split(" "))//splits on basis of spaces
// console.log(game1.split("-"))//splits on basis of dash

// for loop for printing elements of a string line by line
for (let i = 0; i< gameName.length; i++) {
    // console.log(gameName[i])
}

let naam="ayush" +"pratap"
// console.log(naam)

