//  JS Basics: Data Structures

// Javascript has 6 primitive values (data that is not an object and has no methods)
// Those are string, number, bigint, boolean, undefined and symbol (there is also null)

var coolWord = "Yolololo"; // this is a string (surrounded by quotes)
var pizzasCount = 18; // this is a number
var x = 2n ** 53n; // this is a BigInt
var likesIcecream = true; // this is a boolean
var universeAge = undefined; // this is undefined
let sym = Symbol("foo"); // this is a symbol

// To check the type of a primitive:
console.log(coolWord, " => ", typeof coolWord);

// Exercise 1 : print the type of the remaining variables
console.log();
console.log();
console.log();
console.log();

// To read: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#BigInt_type

// ----- ON ALERT -----

// The Window.alert() method displays an alert dialog with the optional specified content and an OK button.

// Exercise 2: uncomment the following line to get some motivation

// window.alert("Hello JavaScripter! Ohhh the places we will go :)");

// We can play around with the JS primitives as we please.

// Exercise 2: create the needed variables and uncomment the following lines

// Create the following variables: name, coins, isHappy

// Uncomment the lines bellow to get the show running
// alert("Welcome: " + name);

// alert("Icecreams are 1$ a piece.");

// alert("You can afford:" coins / 1);

// alert("And that makes you", isHappy ? "happy" : "sad")

// ----- ON CONSOLE LOG -----

// We use console log to print usefull things to the console.

var strongAnimal = "Lion";
var fastAnimal = "Cheetah";
var holidaysAreCool = true;
var randomNumber = 121;

// Exercise 3: uncomment the following lines to see the magic of console log

// console.log("Hello Yellow Bungallow");
// console.log(strongAnimal);
// console.log(fastAnimal);
// console.log(holidaysAreCool);
// console.log(randomNumber + 15);

// ----- ON CONFIRM AND PROMPT -----

var isStillHere = confirm("Are you still with us?");
var howMotivatedAreYou = prompt("How motivated are you?");

// Exercise 4: uncomment to see what happens
alert(isStillHere);
alert(howMotivatedAreYou);

// ----- ON CONDITIONALS -----

// Conditionals are super dupper usefull. They will help us model our business logic.
var likesTacos = confirm("Do you like tacos?");
var likesClubMate = confirm("Do you like Club Mate?");
var sushiType = prompt("What kind of coffe?");

// If the user likes tacos alert that they like tacos
if (likesTacos) {
  alert("Ohh you latin soul it is " + likesTacos + " that you love tacos");
}

// Exercise 5: build the conditionals to satisfy following requirement

// If the user likes Club Mate alert that they will love Berlin

// If none of the previous condition fulfils alert that at least they like coffe and the type of coffe
