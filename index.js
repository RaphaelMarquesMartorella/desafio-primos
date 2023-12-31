const isPrime = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
};

const main = () => {
    const numbers = Array.from({ length: 1000 }, (_, i) => i + 1);
    const primeNumbers = numbers.filter(isPrime);
    
    const sumOfPrimes = primeNumbers.reduce((acc, curr) => acc + curr, 0);
    return sumOfPrimes;
};

const result = main();
console.log('Sum of prime numbers:', result);
