// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

const { statement } = require("@babel/template")
const { array } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.
// Input: Variables provided
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]

// Create describe statement
describe("hitchhiker", () => {
  // It statement includes what we want to occur
  it("returns an array with a sentence about each person with their name capitalized", () => {
    // Our expected output based on the It statement
    expect(hitchhiker(people)).toEqual([
      "Ford Prefect is a hitchhiker.",
      "Zaphod Beeblebrox is president of the galaxy.",
      "Arthur Dent is a radio employee.",
    ])
  })
})
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.169 s

// b) Create the function that makes the test pass.

// Create function that passes an array
const hitchhiker = (array) => {
  // Iterate over the array using .map()
  return array.map((value) => {
    // We'll iterate over each element by splitting the words and returning each first letter as capitalized, then concatenating the remainder of the word
    const towelPeeps = value.name.split(" ").map((value) => {
        return value[0].toUpperCase() + value.substring(1)}).join(" ")
        // We can return our towelPeeps variable and their respective occupations with string interpolation
    return `${towelPeeps} is ${value.occupation}.`
  })
}

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

// Input: Variables provided
// Expected output: [ 2, 0, -1, 0 ]
// Expected output: [ 2, 1, -1 ]

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]


// Create describe statement
describe("remainders", () => {
  // It statement includes what we want to occur
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    // Our expected output based on the It statement
    expect(remainders(hodgepodge1)).toEqual([2, 0, -1, 0])
    expect(remainders(hodgepodge2)).toEqual([2, 1, -1])
  })
})
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.219 s, estimated 1 s

// b) Create the function that makes the test pass.

// Create function that takes in an array
const remainders = (array) => {
  // We'll use .filter() to take out any string in the array and give us only numbers
  return array.filter((value) => {
    // We then use .map() to iterate over the new array consisting of only numbers
      return typeof value === "number"}).map((value) => {
      // Our return will include the value of those numbers in the array % 3
      return value % 3
    })
}

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

// Input: Variables provided
// Expected output: 99
// Expected output: 1125

const cubeAndSum1 = [2, 3, 4]
const cubeAndSum2 = [0, 5, 10]

// Create describe statement
describe("sumCubed", () => {
  // It statement includes what we want to occur
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    // Our expected output based on the It statement
    expect(sumCubed(cubeAndSum1)).toEqual(99)
    expect(sumCubed(cubeAndSum2)).toEqual(1125)
  })
})
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.196 s, estimated 1 s

// b) Create the function that makes the test pass.

// Create function that takes in an array
const sumCubed = (array) => {
  // Create a new variable that will equal 0
  let num = 0
  // Use .map() to iterate over each element of the array. The value of the element will be cubed then added to the num variable as each iteration occurs. 
  array.map((value) => (num += value ** 3))
    // Num will be the new value
    return num
}

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.212 s, estimated 1 s