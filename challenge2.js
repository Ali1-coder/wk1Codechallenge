const prompt = require("prompt-sync")();
let speed = parseInt(prompt("What is your current speed?", 70));
function checkSpeed(speed) {
  let speedLimit = 70;
  let demerit = 5;
  let maxDemerit = 12;
  let points = (speed - speedLimit) / demerit;

  if (speed <= speedLimit) {
    console.log(`Your speed is Ok`);
  } else if (speed > speedLimit && points < maxDemerit) {
    console.log(`Points:${points}`);
  } else {
    console.log(`License suspended`);
  }
}
checkSpeed(speed);
