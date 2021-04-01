
// #1
// Write a function findWordFrequencies that takes in a sentence (string), and returns an object with each word as a key, with a value of how many times that word appears in the sentence.

// eg: { I: 1, love: 1, lamp: 1 }

// Make it work just for sentences without commas, apostrophes, and periods. Capital letters and lowercase letters should be treated as equals: 'The' and 'the' are the same word.


// const findWordFrequencies = (str) => {
// const sentArr = str.toLowerCase().split(' ')
// const wordFrequency = {}

// for(let word of sentArr) {
//     if (wordFrequency[word]) {
//         wordFrequency[word]++
//     } else {
//         wordFrequency[word] = 1
//     }
// }
// return wordFrequency
// }
// console.log('the quick brown fox jumpers over the lazy dog')

// const findTheHighestFrequency = (obj) => {
//     let highestValue =-Infinity
//     let highestValKey
//     for(let val in obj ) {
//     if  (obj[val] > highestValue) {
//         highestValue = obj[val]
//         highestValKey = val
//     }
//     }


//     const ans = {}
//     ans[highestValKey] = highestValue
//     return ans
// }