
//what is a callback


//higher order function
// this is in the arguement is referred to as a callback
// we do this because we want to control when a function gets excuted

// const sayHello = () => {
// console.log("Hello")
// }
// sayHello(setTimeout()) 

//a callback is when we call a function when we invoke a function



//anoyomous function because you are creating afunction within a function that is not named
// has two parameters, one after the curly and the other after the comma
// setTimeout(()=>{
//     console.log("Hello World")
// },4000)



const socky = () =>{
    console.log("I will iron your socks!")
}
socky()

const foodie = () =>{
    console.log("I will sort your m&ms and give you green ones")
}

const pr =()=>{
    console.log("Everyone knows you are the best boss")
}

const boss = employee =>{
    console.log("I AM THE BOSS")
    //another example of a callback
    employee()
}
boss(socky)
boss(foodie)
boss(pr)


const capitalize = word => {
    return word[0].toUpperCase

}