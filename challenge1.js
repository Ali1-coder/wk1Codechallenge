const prompt = require("prompt-sync")();
let marks = parseInt(prompt("What are your marks?", 0));

function userInput(marks) {
  let x = marks;
  if (x > 79) {
    console.log(`Your grade is A`);
  } else if (x >= 60) {
    console.log(`Your grade is B`);
  } else if (x >= 50) {
    console.log(`Your grade is C`);
  } else if (x >= 40) {
    console.log(`Your grade is D`);
  } else {
    console.log(`Your grade is E`);
  }
}

userInput();
