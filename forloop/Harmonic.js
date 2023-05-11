

let number=prompt("enter number::")

let harmonic = 0;

for (let i = 1; i <= number; i++) {
  harmonic += 1 / i;
}

console.log(`The ${number}th harmonic number is ${harmonic}`);