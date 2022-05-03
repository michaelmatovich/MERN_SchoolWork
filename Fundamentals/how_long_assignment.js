// Number.prototype.isPrime = function () {
//         for (let i = 2; i <= Math.sqrt(this); i++) {
//                 if (this % i === 0) {
//                         return false;
//                 }
//         }
//         return true;
// }

const { reverse } = require('dns');
const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
// while (primeCount < 1e5) {
//         if (num.isPrime()) {
//                 primeCount++;
//         }
//         num++;
// }
// console.log(`The 1,000,000th prime number is ${num - 1}`);
// console.log(`This took ${performance.now() - start} milliseconds to run`);

// 100,000 prime is : 1,299,709 - 11615 milliseconds
// 1,000,000 prime is : 15,485,863 - 382302 milliseconds

// recursive
// function rFib(n) {
//         if (n < 2) {
//                 return n;
//         }
//         return rFib(n - 1) + rFib(n - 2);
// }
// console.log(rFib(20));
// Recursive took 6.01 ms to run

// iterative
// function iFib(n) {
//         const vals = [0, 1];
//         while (vals.length - 1 < n) {
//                 let len = vals.length;
//                 vals.push(vals[len - 1] + vals[len - 2]);
//         }
//         return vals[n];
// }
// console.log(iFib(20));

//Iterative took 5.07 ms to run


var story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
// const reversed1 = story.split("").reverse().join("");
// took 4.50 ms to run

// console.log(reversed1)

var reversed2 = "";

        for(var i = story.length-1; i = 0; i--)
        {
                reversed2 += story[i]
        }
        

console.log(reversed2);
console.log(`This took ${performance.now() - start} milliseconds to run`);