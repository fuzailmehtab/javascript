let name=["arman","raman"]
let numbers=[23,32,87,59]

const myarr1= new Array(1,2,3,4)
// console.log(myarr1[0])
// console.log(myarr1[1])

myarr1.push(5)
myarr1.push(6)//ADD IN LAST
// console.log(myarr1)
myarr1.pop()//REMOVES FROM LAST
// console.log(myarr1)
myarr1.unshift(9)//unshift adds element in starting
// console.log(myarr1)
myarr1.shift()//removes elemnt from starting
// console.log(myarr1)
// console.log(myarr1.includes(4))//returns true and false

const newArray=myarr1.join()//converts array to string

console.log(myarr1)
console.log(newArray)
console.log(typeof newArray)
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
// array-part2
const marvel_heroes=["ironman","thor"]
const dc_heroes=["flash","superman"]
// marvel_heroes.push(dc_heroes)//array ke andar array aa jata h,marvelheros ka ek element ban jata h dc_heroes dono merge nahi hote
// console.log(marvel_heroes)
// console.log(marvel_heroes[0])
// console.log(marvel_heroes[2])
// console.log(marvel_heroes[2][1])

const all_heroes=marvel_heroes.concat(dc_heroes) //concat is used on new array while push returns same array(gives all element)
// console.log(all_heroes)

// spread operator-more useful than concat
const all_new_heroes=[...marvel_heroes,...dc_heroes]
// console.log(all_new_heroes)

const new_array=[1,2,[3,5],[4,8,[9,1]]]
let real_array=new_array.flat(2)
// console.log(real_array)


// console.log(Array.isArray("amaan")) 
// console.log(Array.from("amaan"))//converts to individual string array
// console.log(Array.of("ramesh"))//converts to string array

let number1=2020;
let number2=4020;
let number3=6020;
console.log(Array.of(number2,number1,number3))
