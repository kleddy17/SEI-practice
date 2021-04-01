/// MATH METHODS

//Math.round() rounds to the nearest whole number

// let cartTotal = 16.07
// let roundedUpCart = Math.round(cartTotal)
// console.log(roundedUpCart)


//Math.ceil (short for ceiling) rounds up to the nearest whole number
let cartTotal = 16.07
let roundedUpCart = Math.ceil(cartTotal);
//Get the difference of the variables
let donation = (roundedUpCart - cartTotal).toFixed(2);
console.log(donation);
console.log(roundedUpCart);



//.toFixed is a built in javascript that coverts the number to a fixed number
// so instead of 0.92999999999999999999999 it gives 0.93





//ARRAYYS
// An array is a list, all list items go between square brackets.
// Javascript has a builtin called Typeof

// const arr = [];
// console.log(arr);

// // const favFoods = ["pizza", "ice cream", "tacos"]
// // console.log(favFoods);

// //find out what kind of data type the variable arr is
// console.log(Array.isArray(arr))

//elements are the different index is in a data structure

//ARRAY METHODS
//Methods are functions that built into javascript

// .length
// we use .length method to find out the number of elements in an array
// .length lets us find the last index value in an array
// const foods = ["apple", "banana", "nachos", "pizza"]
// console.log(foods.length)


// //how to push a last index into newArr
// let newArr =[]
// let last =(foods.pop())
// newArr.push(last)
// console.log(newArr)


//how to get the last index of the array
// console.log(foods[foods.length-1])


//how to update an array
// const numbers = [21,18,3,4,5]
// numbers[1] = 5;
// console.log(numbers)




//add a new array of numbers
//replace the first number with the sum of the first number times 10
// const numbers = [21,18,5,3,2,1,1,];
// numbers[0] = (numbers[0]*10);
// console.log(numbers);


//Expressions 
//WE can put an expressions in square brackets if we want to access array elements
//Faster way to access a element in a data set
//Fast way to reciecve data in a data structure


// const list = ["chair", "table", "show", "bed"]
// console.log(list[2*2])


//Mathy with Arrays
//Math.floor always gonna round down

// //middle element of array with odd length, need to use Math.floor because it rounds down, which we need when we need to find the midpoint of an odd array!
// const shortArray = ["first", "middle", "last"]

//both work
// let roundD = shortArray[Math.floor(shortArray.length/2)]
// console.log(roundD)

//this is faster
// console.log(shortArray[Math.floor(shortArray.length/2)])



//LOOPS: iterate over an array

// const kitchenSink = ["Dirty spoon", "plate", "sponge", "soap", "water"]

// //if we want to print out all of the items we can make a for loop
// for(let i =0; i<kitchenSink.length; i++) {
//     console.log("This  is in my sink: " + kitchenSink[i])
// }

// // this is if we want to print out every other items in our array
// for(let i =0; i<kitchenSink.length; i+=2) {
//     console.log("This  is in my sink: " + kitchenSink[i])
// }

// const drSeuss = ["Cat in the Hat", "Green Eggs and Ham", "Grinch", "Thing One", "Thing Two", "Cindy Loo Who", "Jojo McDodd"]

// console.log all of the elements of the Array
// console.log the odd numbered index items in the array
// console.log the index number and the item of every odd numbered index items(on seperate lines)

//1.
// console.log(drSeuss.length)
// for(let i =0; i<drSeuss.length; i++) {
//     console.log("All the characters " + drSeuss[i])
// }

//2. 
// for(let i =1; i<drSeuss.length; i+=2) {
//     console.log(drSeuss[i])
 
// }

//3. 
// for(let i =1; i<drSeuss.length; i+=2) {
//     console.log(drSeuss[i],i)
// }


//Using condtionals to select elements in array
//MODULUS to see that the remainder of an index divided by any number (2 would return 0)

// When doing if statements if you are using &&  then the arguement has to be in one
// big paranthesis if ( i %2 ===0 && i ===5 ) but if you are using 
// || then they have to be seperated if (i%2===0) || (i ===5)




// let food = ["pizza"]

const looneyTunes = ["Bugs Bunny", "Tweety", "Daffy", "Porky", "scooby", "lucy"]


// console.log the even numbered items in the array using a conditonal statement. 

// for (let i = 0; i<looneyTunes.length; i++) {
//     if (i%2 === 0){
//         console.log(looneyTunes[i])

//     }
// }

// console.log even numbered items and the item with the index of 3 using a conditional statement. 
// for (let i = 0; i<looneyTunes.length; i++) {
//     if (i%2 === 0 || i ===3 ){
//         console.log(looneyTunes[i])
//     }
// }


//console.log the odd numbered index items in the array using a conditonal statement.
// for (let i = 0; i<looneyTunes.length; i++) {
    //saying if i divided by two DOES NOT equal 0 then it is a odd number
//     if (i%2 != 0) {
//         console.log(looneyTunes[i])
//     }
// }


// When querying the array, put an expression between your square brackets the accesses a random element of the array

//Math random give you a number 0-1, which is a decimal, so you need to use a math method that gives you a whole number and you need to times it by the array length then it will give you a random number between your array. 
// for (let i = 0; i<looneyTunes.length; i++) {
// console.log(looneyTunes[Math.floor(Math.random(looneyTunes.length)*6)])
// }


const favMovies = ["click", "trolls", "air force one", "chucky", "big daddy", "armageddon", "batman", "elf"]

// Methods

//How to print every item in array
// for (let i = 0; i<favMovies.length; i++) {
//     console.log(favMovies[i])
// }

// How to add a new element to the beginning of the array without deleting any
// const newFirstElement = "django"
// adding the newFirstElement to the favMovies array by concat (combing the array and the new variable)
// const newArray = [newFirstElement].concat(favMovies) // [ 4, 3, 2, 1 ]
// console.log(favMovies);


//1. index of
// console.log(favMovies.indexOf("trolls"))

//2. push
// add new element to the end of the array
// favMovies.push("point break")
// for (let i = 0; i<favMovies.length; i++) {
//     console.log(favMovies[i])
// }

//3. pop
//removes last element from the array list
// console.log(favMovies.pop())
// for (let i = 0; i<favMovies.length; i++) {
//     console.log(favMovies[i])
// }

//4. reverse
// Can only be done once and it forever changes the array. 
// const reverse = favMovies.reverse()
// console.log(reverse);

//5. unshift
// will take an item and put it at the beginning of the array
// favMovies.unshift("a goofy movie")
// console.log(favMovies)

//6. shift
// removes the first index the array, the opposite of pop()
// favMovies.shift()
// console.log(favMovies.shift())
// console.log(favMovies)


//7. slice "a range"
// taking a portion of your array  by the first index number you declare and the last index number you declare and grabs that portion, but it doesn't the last index number it grabs the one before it. 
// console.log(favMovies.slice(2,5))
// doesnt destroy array
// console.log(favMovies)


//8. splice "not a range" 
// similar to slice by it grabs the a portion of the array by the first index number you declare and the last number you declaer. The difference is that it is destructive, it returns the portions that you want to remove. So it deletes the portion that you grab. 

//* Optional you wanted to add to the array you are splicing by index range and add new elements. 
//Also you can add to the splced portion of array by calling a third arguement, and writing the new elements. 

// console.log(favMovies.splice(2,5, "onward", "up", "soul") )
// console.log(favMovies)


//9. sort
// Sorts the array in ascending order (aphabetical), capital letters take priotory when you sort alphabetically. 
// console.log(favMovies.sort())

// // If you combine sort and reverse you can it descending order
// console.log(favMovies.reverse())

// 10. sort numbers a little tricky
// when sorting numbers it will go by the elements first digit if there is more than one digit

// const numbers = [34,5,6,2,35,6,7,8,3,4,5]

// console.log(numbers.sort())
// console.log(numbers.reverse())