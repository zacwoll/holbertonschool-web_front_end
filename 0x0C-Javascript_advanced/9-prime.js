function countPrimeNumbers() {
    let prime_count = 1;

    for (let i = 3; i < 100; i++) {
        let isPrime = (i) => {
            for (let j = 2; j <= Math.sqrt(i); j++) {
                if (i % j === 0) {
                    return false;
                }
            }
            return true;
        }
        if (isPrime(i)) {
            prime_count++;
        }
    }
    return prime_count;
}

let t0 = performance.now();
countPrimeNumbers();
let t1 = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${t1-t0} milliseconds`);