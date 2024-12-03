const basicSalary = parseInput(prompt("What is your Salary"));
const benefits = parseInput(prompt("What are your benefits:"));
let income = (basicSalary = benefits);
const taxRates = [
  { upTo: 24000, rate: 0.1 },
  { upTo: 32333, rate: 0.25 },
  { above: 32333, rate: 0.3 },
];
const nhifRates = [
  { upTo: 5999, deduction: 150 },
  { upTo: 7999, deduction: 300 },
  { upTo: 11999, deduction: 400 },
  { upTo: 14999, deduction: 500 },
  { upTo: 19999, deduction: 600 },
  { upTo: 24999, deduction: 750 },
  { upTo: 29999, deduction: 850 },
  { upTo: 34999, deduction: 900 },
  { upTo: 39999, deduction: 950 },
  { above: 39999, deduction: 1000 },
];
const nssfRate = 0.06;
