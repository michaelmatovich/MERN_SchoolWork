/* 
  Stable sort.
  Visualization:
  https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
  Time Complexity
    - Best case: O(n log(n)) linearithmic.
    - Average case: O(n log(n)) linearithmic.
    - Worst case: O(n log(n)) linearithmic.
  Space: O(n) linear
  steps:
    1. create a merge function to merge two already sorted arrays into a single
        sorted array.
      - you do NOT need to work in place, ok to use a new array
    2. create mergeSort function to sort the provided array
      - split the array in half and recursively merge the halves using the
          previously created merge function.
      - splitting of arrays stops when array can no longer be split.
      - an array of 1 item is by definition sorted, so two arrays of 1 item
          can therefore be merged into a sorted array.
*/

// merge
const sortedA1 = [];
const sortedB1 = [];
const expectedMerge1 = [];

const sortedA2 = [5];
const sortedB2 = [2];
const expectedMerge2 = [2, 5];

const sortedA3 = [3];
const sortedB3 = [2, 3, 4, 7];
const expectedMerge3 = [2, 3, 3, 4, 7];

const sortedA4 = [1, 2, 4, 5, 6, 9];
const sortedB4 = [3, 7, 8, 10];
const expectedMerge4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Efficiently merges two already sorted arrays into a new sorted array.
 * Do not mutate the given arrays.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} left
 * @param {Array<number>} right
 * @returns {Array<number>} A new sorted array containing all the elements of
 *    both given halves.
 */

// Mutates Arrays
// function merge(arr1, arr2) {
//     let result = [];
//     let length = arr1.length + arr2.length;
//     for(let i = 0; i < length; i++){
//         if(arr1[0] <= arr2[0]){
//             result.push(arr1[0]);
//             arr1.shift();
//         }
//         else if(arr2[0] < arr1[0]){
//             result.push(arr2[0]);
//             arr2.shift();
//         }
//         else{
//             if(arr1[0] == undefined){
//                 result.push(...arr2);
//                 break;
//             }
//             else{
//                 result.push(...arr1);
//                 break;
//             }
//         }
//     }
//     console.log(arr1 + arr2)
//     return result;
// }
//Does not mutate, but 3 while loops
// function merge(arr1, arr2) {
//     let result = [];
//     let i = 0;
//     let j =0;
//     while(i < arr1.length && j < arr2.length){
//         if(arr1[i] < arr2[j]){
//             result.push(arr1[i]);
//             i++;
//         } else {
//             result.push(arr2[j])
//             j++;
//         }
//     }
//     while(i < arr1.length){
//         result.push(arr1[i])
//         i++;
//     }
//     while(j < arr2.length){
//         result.push(arr2[j])
//         j++;
//     }
//     return result;
// }


// CRAZY Algo
// combine=(a,b)=>
// {
//     let c=[],l=0,r=0;
//     let ops=
//     {
//         false:()=>c[c.length]=b[r++],
//         true:()=>c[c.length]=a[l++]
//     };
//     for(;l+r<a.length+b.length;) ops[a[l]<b[r]]();
//     return c;
// }



// merge=(a)=>
// {
    //     if(a.length==1) return a;
    //     let mid=a.length>>1;
    //     return combine(a.slice(0,mid),a.slice(mid));
    // }
    // console.log(merge([1,2,4,5,6,9,1,7,8,10,12,15,18]));
    
    //Saraubh mergesort
    // function mergeSort(nums) {
        //     console.log(nums)
        //     //if the array length is greater than 1, we can split it in half
        //     if(nums.length >1){ 
            //         let mid = Math.floor(nums.length/2);
            //         let lefthalf = nums.slice(0,mid);
//         let righthalf = nums.slice(mid)
//         let left = mergeSort(lefthalf)
//         let right = mergeSort(righthalf)

//     }else{
    //         return nums
    //     }
    // }
    
    // combine=(a,b)=>{
//         var c = [], l = 0, r = 0, cl = 0;
//         c[a.length + b.length - 1] = 0; // Pre-allocate
//         while (l < a.length || r < b.length) {
//             if (l < a.length && r < b.length) {
//                 if (a[l] < b[r]) {
//                     c[cl] = a[l];
//                     cl += 1;
//                     l += 1;
//                 }
//                 else { // a[l] >= b[r] === true
//                     c[cl] = b[r];
//                     cl += 1;
//                     r += 1;
//                 }
//             }
//             else if (l < a.length) {
//                 c[cl] = a[l];
//                 cl += 1;
//                 l += 1;
//             }
//             else { // r < b.length === true
//                 c[cl] = b[r];
//                 cl += 1;
//                 r += 1;
//             }
//         }
//     return c;
// }






//         return merge(left, right)








// console.log(merge(sortedA1, sortedB1));
// // // merge(sortedA2, sortedB2)
// console.log(merge(sortedA2, sortedB2));

// console.log(merge(sortedA3, sortedB3));
// console.log(merge(sortedA4, sortedB4));


// mergeSort
const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expectedSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Creates a new sorted array based on the given nums being recursively split
 * and merged.
 * Best: O(n log(n)) linearithmic.
 * Avg: O(n log(n)) linearithmic.
 * Worst: O(n log(n)) linearithmic.
 * @param {Array<number>} nums
 * @returns {Array<number>} A New sorted array.
 */
// function mergeSort(nums) { }

//Another Merge
// function merge(arr1, arr2) {
    //     let result = [];
    //     let smallerArr = arr1;
    //     let largerArr = arr2;
    
    //     if (arr2.length < arr1.length){
        //         smallerArr = arr2;
        //         largerArr = arr1;
        //     }
        
        //     let j = 0;
        
        //     for (let i = 0; i < largerArr.length; i++){
            //         while(smallerArr[j] < largerArr[i] && j < smallerArr.length){
                //             result.push(smallerArr[j]);
                //             j++;
                //         }
//         result.push(largerArr[i]);
//     }

//     while(j < smallerArr.length){
    //         result.push(smallerArr[j]);
    //         j++;
    //     }
    
    //     return result;
    // }
    
    // function mergeSort(nums) {
        //     if(nums.length == 1){
            //         return nums;
            //     }
            
            //     let splitIndex = Math.floor(nums.length/2);
            
            //     return merge(mergeSort(nums.slice(0,splitIndex)), mergeSort(nums.slice(splitIndex,nums.length)));
            // }
            
            
            //The Dave Way
            combine=(a,b)=>{
            var c = [], l = 0, r = 0;
            while (l < a.length || r < b.length) {
                if (l < a.length && r < b.length) {
                    if (a[l] < b[r]) {
                        c.push(a[l]);
                        l += 1;
                    }
                    else { // a[l] >= b[r] === true
                        c.push(b[r]);
                        r += 1;
                    }
                }
                else if (l < a.length) {
                    c.push(a[l]);
                    l += 1;
                }
                else { // r < b.length === true
                    c.push(b[r]);
                    r += 1;
                }
            }
            return c;
        }      
            console.log(combine(sortedA1, sortedB1));
            console.log(combine(sortedA2, sortedB2));
            console.log(combine(sortedA3, sortedB3));
            console.log(combine(sortedA4, sortedB4));
            console.log(combine([1,2,4,5,6,9,10, 11, 12, 13, 14],[1,7,8,10,12,15,18]));
            console.log(combine([1,7,8,10,12,15,18], [1,2,4,5,6,9,10, 11, 12, 13, 14]));
            