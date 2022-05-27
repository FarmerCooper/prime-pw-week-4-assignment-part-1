console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hello, ${name}!` ;
}
// Remember to call the function to test
let myName = 'Diego';
console.log(helloName(myName));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
}
console.log(addNumbers(1,2));

// 4. Function to multiply three numbers & return the result
function multiplyThree( x, y, z){
  return x * y * z;
}
console.log(multiplyThree(1,2,3));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number >= 0 ){
    return true;
  }
    return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let favDogBreeds = ['Golden Retrievers', 'German Shepards', 'Pomeranians', 'Huskies'];
let worstDogBreeds = [];

function getLast( array ) {
  return (array[array.length - 1]);
} 

console.log(getLast(favDogBreeds));
console.log(getLast(worstDogBreeds));


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
let currentFormulaOneTeams = ['Ferrari', 'Redbull', 'Mercedes', 'AlphaRomeo', 'McLaren', 'Alpine', 'AlphaTauri', 'Williams', 'Aston Martin', 'Haas']

function find( value, array ){
  for (let i=0; i<array.length; i++){
    if (value === array[i]){
      return true;
    }
  }
    return false;
}

console.log(find('Audi', currentFormulaOneTeams));
console.log(find('Ferrari', currentFormulaOneTeams));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
let randomString = 'Random';
let lettersInAlphabet = 'asdfghjklqwertyuiopzxcvbnm'

function isFirstLetter(letter, string) {
  string = string.toLowerCase(); //trying out something
  if (letter === string[0]){
    return true;
  }
    return false;
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
let arrayOfNumbers = [56, 65, 67, 76, 78, 87];

function sumAll( ) {
  // TODO: loop to add items
  for (sum=0; sum<arrayOfNumbers.length; sum++)
  return sum;
}

console.log(sumAll(arrayOfNumbers))

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
const positiveNumbers = [23, 35, 645, -124, -5345, 7657, 45]


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
