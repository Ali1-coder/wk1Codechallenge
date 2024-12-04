const prompt = require("prompt-sync")();
const basicSalary = parseInt(prompt("What is your Salary:"));
const benefits = parseInt(prompt("What are your benefits:"));
let income = basicSalary + benefits;
const taxRates = [
  { upTo: 24000, rate: 0.1 },
  { upTo: 32333, rate: 0.25 },
  { above: 32333, rate: 0.3 },
];
const nhifRates = [
  { upTo: 5999, rate: 150 },
  { upTo: 7999, rate: 300 },
  { upTo: 11999, rate: 400 },
  { upTo: 14999, rate: 500 },
  { upTo: 19999, rate: 600 },
  { upTo: 24999, rate: 750 },
  { upTo: 29999, rate: 850 },
  { upTo: 34999, rate: 900 },
  { upTo: 39999, rate: 950 },
  { above: 39999, rate: 1000 },
];
const nssfRate = 0.06;

function calPayee(income, taxRates) {
  let payee = 0;

  for (const rates of taxRates) {
    if (rates.upTo && income > rates.upTo) {
      payee += rates.upTo * rates.rate;
      income -= rates.upTo;
    } else if (rates.above || income > 0) {
      payee += income * rates.rate;
      break;
    }
  }
  console.log(`Payee (Tax): ${payee}`);
  return payee;
}
// Calculate NHIF Deduction

function calNHIF(income, nhifRates) {
  let nhif = 0;
  for (const rates of nhifRates) {
    if (rates.upTo && income <= rates.upTo) {
      nhif = rates.rate;
      break;
    } else if (rates.above) {
      nhif = rates.rate;
    }
  }
  console.log(`NHIF Deduction: ${nhif}`);
  return nhif;
}
function calNssf(basicSalary, nssfRate) {
  let nssf = Math.min(basicSalary * nssfRate, 1800); // NSSF capped at 1800
  console.log(`NSSF Deduction: ${nssf}`);
  return nssf;
}

function calNetSalary(income) {
  let netSalary =
    income -
    (calPayee(income, taxRates) +
      calNHIF(income, nhifRates) +
      calNssf(basicSalary, nssfRate));
  console.log(`Net Salary: ${netSalary}`);
  return netSalary;
}

calNetSalary(income);
