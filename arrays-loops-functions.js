// In this section we will practice with arrays

var continents = [
  "Asia",
  "Africa",
  "North America",
  "South America",
  "Antarctica",
  "Europe",
  "Australia",
];

// We can select and element in an array using the index
console.log(continents[0]);

// Print Europe to the console

// Print Africa to the console

// Print North America to the console

// We can reasign Array elements how we please. Let's say we want Europe to be lower case now.

continents[3] = continents[5].toLowerCase();

// reasign south america to lower case

// We can loop through an array using the for statement.
// Let's loop through each item in the array and log it to the console.

for (var i = 0; i < continents.length; i++) {
  console.log("I want to travel to " + continents[i]);
}

// Log where you want to travel, add the number of the continent to the message (use the index, i)

// You can also use loops in different context
for (var i = 0; i < 11; i++) {
  console.log("I want " + i + " pizzas.");
}

// Console log a message for each our in the day (24)
for (var i = 0; i < 24; i++) {
  console.log();
}

// We have a dishes array
var dishes = ["chesse", "eggs", "brocolli", "chocolate", "carrots"];

// Loop through the dishes array and if the food starts with a "b" or "h" print "I don't like" to the console.
// If the dish starts with a "c" print "I like" to the console.
// Always console log current dish

// Steps:
// Create a variable to hold our array length.
// Loop through our dishes array.
// Console out the dish in the current index.
// Add custome rules using conditionals.

// ---------------- FUNCTIONS ---------------

// Functions can take some input and return some output.
function sum(a, b) {
  console.log(a + b);
}

// Write a function that sums 4 numbers and prints the result to the console.

// Write a function that multiplies 3 numbers and prints the result to the console.

// Write a function that checks if the input is a string and if so, it prints it to the console.

// ---------------- OBJECTS ---------------

// At the core of JavaScript are objects.

var person = {
  name: "Charlie",
  lastName: "Chaplin",
  job: "Comic and filmmaker",
  born: 1889,
  died: 1977,
  isCool: true,

  howOld: function () {
    alert(this.name + " lived " + (this.died - this.born) + "years");
  },
  introduceYourself: function () {
    alert("Hi, my name is " + this.name + " " + this.lastName + ".");
    alert("I am a " + this.job);
    alert("And I am " + this.isCool ? " cool." : "not cool at all.");
  },

  sayJoke: function () {
    alert("I have no jokes left :)");
  },
};

// Console log...

// Charlie's first name?

// Charlie's last name?

// Charlie's age?

// How can we run the how old method?

// How can we run the introduceYourself method?

// How can we run the sayJoke method?
