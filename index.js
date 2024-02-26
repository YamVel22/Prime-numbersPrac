const startRange = 2;
const endRange = 96;

for (let i = startRange; i <= endRange; i++) {
  let isPrime = true;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(i + " is a prime number.");
  }
}
