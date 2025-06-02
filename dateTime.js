const myDate= new Date();
// console.log(myDate)
// console.log(myDate.toDateString())
// console.log(myDate.toString())
// console.log(myDate.toLocaleString())

let createdDate= new Date(2025,0,23)//here month starts from 0
// console.log(createdDate.toString())//it gives time
// console.log(createdDate.toDateString())//only date

let createdDate1= new Date(2025,2,12,6,32)
// console.log(createdDate1.toLocaleString())

// miliseconds nikalne ke liye
let myTimeStamp=Date.now()
// console.log(myTimeStamp)

// console.log(createdDate.getTime())

// console.log(Math.floor(Date.now()/1000))//for seconds

const newDate= new Date();
// console.log(newDate.getDay())//monday-1
// console.log(newDate.getMonth()+1)//january-0


console.log(newDate.toLocaleString('default',{
    month: "long",
    weekday: "narrow",
}))