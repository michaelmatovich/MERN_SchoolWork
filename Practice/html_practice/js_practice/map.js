

// const winningCombinations = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ];

// console.log(winningCombinations[0]);

// moveList = [0, 1, 2];

// console.log(moveList == winningCombinations[0]);

// console.log(arraysEqual(winningCombinations[0], moveList));


// function arraysEqual(a, b) {
//     if (a === b) return true;
//     if (a == null || b == null) return false;
//     if (a.length !== b.length) return false;

//     // If you don't care about the order of the elements inside
//     // the array, you should sort both arrays here.
//     // Please note that calling sort on an array will modify that array.
//     // you might want to clone your array first.

//     for (var i = 0; i < a.length; ++i) {
//         console.log(i);
//         if (a[i] !== b[i]) return false;
//     }
//     return true;
// }

// console.log(winningCombinations.includes(moveList));

let hashmap = {};


hashmap["tester"] = "test";
console.log(hashmap)

let keys = Object.keys(hashmap);
console.log(keys);