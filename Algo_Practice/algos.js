
//Problem 1

// You are given an m x n integer grid accounts where accounts [i][j] is the amount of money the ith customer has in the jth bank. 
// Return the wealth that the richest customer has. 
// A customers wealth is the amount of money they have in all their bank accounts.
// The richest customer is the customer that has the maximum wealth. 

// Each digit in the array is the wealth from that particular bank account. We want to add all three bank accounts to get the customers 
// wealth and then return the customer with the highest wealth. 

//Example one

// Input: accounts = [[1,2,3], [3,2,1]] 
// Output: 6
// Explanation: 
// 1st customer has wealth = 1+2+3 = 6
// 2nd customer has wealth = 1+2+3 = 6
// Both customers are considered the richest with a wealth of 6 each, so return 6

// Example 2
// Input accounts = [1,5], [5+7], [7+5]
// Output = 12
// 3rd customer has wealth = 12




// const maximumWealth = function(customersWealth) {
// let newArr =[]
//    for (let i = 0; i<customersWealth.length; i++) {
//    let newElement = ((customersWealth[i].reduce((a, b) => a + b)))
//    newArr.push(newElement)
// } 
//printing out the new array highest to lowest, and then console the first index of that new array
// newArr.sort(function(a,b){return b-a})
// return doesn't print so you need to put a console.log above it so you can get the answer in the return
// console.log(newArr[0])
// return newArr[0] 
// }

// maximumWealth([[1,2,3,], [4,5,6], [7,8,9]])


// for (let j = 0; j<newArr.length; j++) {
//     let compareElement = newArr[j];
//     console.log(compareElement)
// }

// if (newArr[0] >newArr[1] && newArr[0] > newArr[2]) {
//     console.log("Im the richest")
// } else {
//     console.log("I'm poor")
// }


// for (let j = 0; j<newArr.length; j++) {
//     let compareElement = newArr[j];
//     console.log(compareElement)
  
// }


// if (compareElement[0]> compareElement[1]){
//     console.log("Im the richest!")
// } else {
//     console.log ("Im poor")
// }



//2
// Given a string, remove the vowels "a", "e", "i", "o", "u" from it and return the new array

// keyword = "I love algos and pasta"
// newArr = []
// // letter =keyword.split("")
// console.log(letter)

// const removeVowel = (letter) =>{
// newArr=[]
// let everyLetter =letter.split("")  
// for(let i =0; i<everyLetter.length; i++) {
// // console.log(everyLetter[i])
// if (everyLetter[i] != "a" && everyLetter[i] != "o" && everyLetter[i] !="i" && everyLetter[i] != "e" && everyLetter[i]!= "u") {
//  newArr.push(everyLetter[i])
// }  

// } 
// console.log(newArr)
// noVowels = newArr.join("")
// console.log(noVowels)


// return{
//     noVowels
//     // otherArr
// }

// }
// removeVowel("i lovuue algos anid pastia")


//3
//Split array in the middle and shuffle


// var shuffle = function(nums,n) {
//     let middle = nums[nums.length/2] //returns 3 
//     let secondHalf = []
//     let firstHalf = []
//     let finalArr = []
//     // console.log(nums.length)
//     // console.log(middle)
//     firstHalf = nums.splice(0,3)
//     console.log(firstHalf)
//     secondHalf=(nums)
//     secondHalf.slice(middle)    
//     console.log(secondHalf)
//     // console.log(secondHalf)
//     for(let i =0; i<firstHalf.length; i++){
          
       
//     }
// }

//     shuffle([2,3,4,5,6,7])

    // let rounds = 0
    // secondHalf.push(nums.slice(middle,length))
    // console.log(secondHalf)
    // firstHalf.push(nums.slice(0,middle))
    // console.log(firstHalf)
    // //while 0 is < 8
    // for(let i =0; i<nums.length; i++){
    //     finalArr.push(firstHalf.shift())
    //      console.log(finalArr)
    // }



    // 4

    //INSTRUCTIONS

    //Given the array candies and the integer extraCandies, where candies [i] represents the numbers of candies that the ith kids has.
    
    // For each kid check if there is a way to distribute extraCandies among the kids such that they can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies. 

    //MY NOTES
    // for loop
    // we have an array of candies
    // integer(variable) extraCandies
    // candies [i] makes me think a for loop
    // Maybe a forEach?
    // add candies till length is a certain number condition
    // booleansss

    // The map() method creates a new array by performing a function on each array element. The map() method does not execute the function for array elements without values. The map() method does not change the original array.

//     const candyDealer = (kidsCandies, extraCandies) => {
//         //Created a new array with the extra candies added
//        let newAmount=[]
//        //Created a new array for the original amount of candies
//        let orgArr =[]
//        // Created an array with the highest index value of orignal array to compare to the newAmount
//        let singleVariable=[]

//         for(let i=0; i<kidsCandies.length; i++) {
//             orgArr.push(kidsCandies[i])
//             newAmount.push(kidsCandies[i]+extraCandies)          
// }  orgArr.sort(function(a,b){return b-a}) 
//     singleVariable.push(orgArr[0])
//     console.log(singleVariable)
//         for (let j =0; j<newAmount.length; j++){
//             if(newAmount[j]>=singleVariable) {
//                 console.log("true")
//             } else {
//                 console.log("false")
//             }
//         }
//     }
//     candyDealer([2,3,5,1,3],3)

    //MY NOTES
    // add extraCandies until the number reaches a certain amount without hardcoding it
    // if kid 1 who has 2 candies gets all extraCandies they will have 5
    // if kid 2 who has 3 candies gets all extraCandies they will have 6
    // if kid 3 who has 5 candies gets all extraCandies they will have 8 
    // if kid 4 who has 1 candies gets all extraCandies they will have 4
    // if kid 5 who has 3 candies gets all extraCandies they will have 6

    // GIVEN EXAMPLE 1
    // Input: candies = [2,3,5,1,3], extraCandies =3
    // Output: [true, true, true, false, true]
    // Explanation: 
    // Kid 1 has 2 candies and if he or she receives all extra candies(3) will have 5 candies --- the greates number of candies among the kids. 
    //Kid 2 has 3 candies and if he or she recieves at least 2 extra candies will have the greatest number of candies among the kids. 
    //Kid 3 has 5 candies and this is already the greatest number of candies among the kids.
    //Kid 4 has 1 candy and even if they recieve all extra candies will only have 4 candies
    //Kid 5 has 3 candies and if they recieve at least 2 extra candies will have the greatest number of candies among the kids. 


    //GIVEN EXAMPLE 3
    // Input: candies = [4,2,1,1,2], extraCandies =1
    // Output: [true,false,false,false,false]
    //Explanation: There is only 1 extra candy, therefore only kid 1 will have the greatest number of candies among the kids regardless of who gets the extraCandies.


// # ALGO 4
// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// const jewleryStore =(jewels, stones) => {
//     let newJewel = []
//     let newStone = []
//     // console.log(jewels)
//     // console.log(stones)
//    for(let i = 0; i<jewels.length; i++){
//         newJewel=(jewels[i].split(""))
//         console.log(newJewel)  
//    } 
//       for (let j =0; j<stones.length; j++) {
//           newStone=stones[j].split("")
//           if(newJewel === newStone) {
//               console.log("It a match!")
//           } else {
//               console.log("Its not a match!")
//           }
//       }
    
//      }

// jewleryStore(["aA"],["aAAbbbb"])

// if (jewels[i]!== stones[i]) {
//     console.log("jewel")
// } else {
//     console.log("stone")
// }


// if(jewels[i] === stones[i]){
//     console.log("Its a match!")
// }
//Example 1:
//Input: jewels = "aA", stones = "aAAbbbb"
// so  jewels "aA" are ALSO stones.
// so jewels is a variable and stones is a variable. 
// .split? then sort?


//Output:3

// Example #1 
// Input: jewels = "z", stones = "ZZ"
// Output:0


// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
// Return the answer in an array.
 
// Example 1:
// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]
// Explanation: 
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1). 
// For nums[3]=2 there exist one smaller number than it (1). 
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

// for loop that compares elements
// compare each number in array to line them up for smallest to greatest?
// push news elements in array and if a match add +1 to the new array
// sort then map
const numberSorter = (nums) =>{
    for(let i = 0; i<nums.length; i++) {
        // console.log(nums[i]-1)
        if(nums[i] < nums[i]-1) {
            nums++
            // console.log(nums[i])
    }
}
}

nums = [8,1,2,2,3]
numberSorter(nums)

//Bubble Sort

// const bubbleSort = (array) => {
    // console.log(array)
    // Make some sort of loop that keeps happening if there were any swaps
    // that happened this turn

    // for(let i =0;  i<array.length; i++ ) {
    //     console.log(array[i])
        // if(array[i] < array[i]-1) {
        //     console.log(array[i])
        // }
    // }
    // reset swapHappened to false each time so we can detect if a swap
    // happened in this specific iteration.

    // Make another loop (inside the first one) to go through one 
    // round of swapping from the start of the list to the end

    // Inside inner loop:
    // compare each pair of elements near each other
    // swap them if the bigger one was at a lower index.

    // Make sure to keep track of whether a swap happened!

    // After both loops have exited, remember to return the array
//     return array;

// }

// const test = [1, 4, 0, 9, -1];
// // const test2 = [10, 24, -10, 2, -1];
// console.log(bubbleSort(test));


// Given the array, nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j !=i and nums [j] < nums [i]

// Return the answer in an Array


 nums = [8,1,2,2,3]
// Output [4,0,1,1,3]

//Two for loops, i and j

const numberSorter = () =>{

}