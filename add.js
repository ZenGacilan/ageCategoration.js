// Collect user's age
let age = parseInt(prompt("20:"));

// Categorize the user's age using nested if-else statements
if (age < 5) {
  console.log("You are a Toddler.");
} else if (age >= 5 & age <= 11) {
  console.log("You are a Child.");
} else if (age >= 12 & age <= 19) {
  console.log("You are a Teenager.");
} else if (age >= 20 & age <= 35) {
  console.log("You are a Young Adult.");
} else if (age >= 36 & age <= 60) {
  console.log("You are Middle-Aged.");
} else if (age >= 61 & age <= 65) {
  console.log("You are a Senior.");
}
