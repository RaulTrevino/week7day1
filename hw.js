// Question #1

// Write a function that takes a string and an array of strings ( in this example dog_names) and checks if one of the list members (dog names) is in the string . Return an array of the dog names found in the array

// Hint : filter, includes
// Resources: Array.prototype.includes() - JavaScript | MDN
// Examples:

// var dogNames = ["Max","Fido","Gizmo","Nala"]

// //Test Cases
// var testString1 = "Hello, my dog is Max, and they have purple eyes!"
// //Expect ['Max']

// var testString2 = "My Dog is fast, her name is Tippi"
// //Expect []

// var testString3 = "Come here Fido and Gizmo come here"
// //Expect['Fido','Gizmo']

function findDogNames(){
    const foundDogNames = []  // empty list  if dog name found in sentence it will be added here


for(const name of dogNames){    // loop that will search through and find the dog name
    if(inputString.includes(name)){ // if the sentence im testing has a dog name in it 
        foundDogNames.push(name); //  add that name to the found dog names empty list
    }
    
}
    return foundDogNames;        // return the name if in list 
}

const inputString = "dylan has three dogs max, fido, and ivy";     //the sentence im using 
const dogNames = ["max","fido","ivy"];      ///// this is a dogs name im searching for in the sentence
const result = findDogNames(inputString,dogNames);   // running the funct looking through string and searching for dog names
console.log(result)   //printing the result if any 



// Question #2

// Write a function using a for loop to convert an array of numbers from inches to feet.

// Example: 


// var heightsInInches = [66, 64, 60, 52, 72, 80, 51]
// // Expects:
// [ 5.5, 5.333333333333333, 5, 4.333333333333333, 6, 6.666666666666667, 4.25 ]


// .map() method in JavaScript as a makeover team that can transform each member of a group (an array) in the same way.
//so it is using the .map for all the numbers in heightsininches and / dividing each by 12
function ConvertToFeet(heightsInInches){ 
    const heightInFeet = [] /// funct name and list  im calling
    for(let i=0; i<heightsInInches.length; i++){ // for loop goes through each index(num) 
    // console.log(heightsInInches)///test print
        heightInFeet.push(heightsInInches[i] / 12);//gets each index(num) and divides by 12 then pushes to height in feet empty list
    // console.log(heightInFeet)//test print
    }

    return heightInFeet  // returns list
}

const heightsInInches = [66, 64, 60, 52, 72, 80, 51] // list im using 
const heightInFeet = ConvertToFeet(heightsInInches) 
console.log(heightInFeet)


// Question #3

// Using a for loop (or for extra challenge the Ternary Operator and Map), create an array that adds ‘is eating pizza’ to every name from the array ‘tmnt’ that ends with ‘o’ and add ‘is being rude’ to any other name

// Example:


// var tmnt = ["Leonardo", "Michelangelo", "Donatello", "Raphael"]
// // Expects:
// [
// 'Leonardo is eating pizza',
// 'Michelangelo is eating pizza',
// 'Donatello is eating pizza',
// 'Raphael is being rude'
// ]

var tmnt = ["Leonardo", "Michelangelo", "Donatello", "Raphael"];
    for (var i = 0; i < tmnt.length; i++) {
    var turtle = tmnt[i];
    if (turtle.endsWith("o")) {
    console.log(turtle + " is eating pizza");
    } else {
    console.log(turtle + " is being rude");
  }
}







// Question #4

// Write an arrow function to find the max number in a list. Do not use the Math.max function. The list will be all positive numbers.

// Example:

var findAMax=[123,5436,45784,1234,34,65,234125,645,3452,13216,49]
var maxNumb = findAMax.reduce((max, current) => (current > max ? current : max), 0);
console.log(maxNumb);



// def multiply(a, b):
//    return a * b

//https://www.codewars.com/kata/50654ddff44f800200000004
var num1=2
var num2=2
console.log(num1*num2)


//https://www.codewars.com/kata/5715eaedb436cf5606000381

const arr = [1, -4, 7, 12];

function positiveSum(arr) {
    let c = 0;
    for (let num of arr) { //the num of array
        if (num > 0) { // if num is > 0 
            c += num; //0 += numbers that are greater than 0
        }
    }
    return c;
}

const results = positiveSum(arr);
console.log(results); 


//https://www.codewars.com/kata/523b4ff7adca849afe000035
function greet(){
    return "hello World!"
}

const greeting= greet();
console.log(greeting)