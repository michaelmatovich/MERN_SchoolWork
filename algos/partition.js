/* Params: nums, left, right
    - left and right are indexes, for now, left will be 0, and right will be
        the last idx.
    - later these params will be used to specify a sub section of the array to
        partition.
Steps:
1. Pick an number out of the arr to be your pivot value
    - usually the middle idx but can be any.
2. Partition the array IN PLACE such that all values less than the pivot
value are to the left of it and all values greater than the pivot value
are to the right (not perfectly sorted).
3. return: the index where the left section of smaller items ends.
"Choosing a random pivot minimizes the chance that you will encounter
worst-case O(n^2) performance (always choosing first or last would cause
worst-case performance for nearly-sorted or nearly-reverse-sorted data).
Choosing the middle element would also be acceptable in the majority of
cases."
https://stackoverflow.com/questions/164163/quicksort-choosing-the-pivot
*/

/* 
There are many possible answers for nums1 depending on which number is chosen
as the pivot.
E.g., if 3 is chosen as the pivot, the below are some solutions because
numbers smaller than 3 are to the left and larger numbers are to the right
[2, 3, 7, 6, 11, 8, 14]
[2, 3, 11, 8, 7, 6, 14]
[2, 3, 8, 7, 11, 6, 14]
[2, 3, 8, 6, 14, 7, 11]
*/
// //CRAIG
// function partition(arr) {
//     let pivot = arr[0];
//     let count = 0;
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < pivot) {
//             count++;
//             [arr[i], arr[count]] = [arr[count], arr[i]];
//         }
//     }
//     [arr[0], arr[count]] = [arr[count], arr[0]];
//     return count;
// }


/**
 * Partitions the given array in-place by selecting the number at the middle
 * index to use it as a "pivot" value, then arranges all numbers less than the
 * pivot to be to it's left and all larger numbers to the right of the pivot.
 * - Time: O(?).
 * - Space: O(?).
 * @see https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
 *    visualization of quickSort. Focus only on the first cycle of the visualization
 *    for the partition portion only.
 * @param {Array<number>} nums
 * @param {number} left The index indicating the start of the slice of array
 *    being processed.
 * @param {number} right The index indicating the end of the slice of array
 *    being processed.
 * @returns {Array<number>} The idx where left section of smaller items ends.
 */
function partition(arr, start = 0, end = arr.length - 1) {
    sorts = 0;
    front_sorted = 0;
    pivot = Math.floor((start + end) / 2);
    pivot = 0;
    placeholder = 0;
    console.log("Pivot is:" + arr[pivot])

    do {
        while (arr[start] < arr[pivot]) {
            if (arr[start] < arr[pivot]) {
                start++;
                sorts++;
            }
        }
        while (arr[end] > arr[pivot]) {
            if (arr[end] > arr[pivot]) {
                end--;
                sorts++;
            }
        }
        placeholder = arr[end];
        arr[end] = arr[start];
        arr[start] = placeholder;
    } while (start != end)


    return arr;
}


const nums1 = [11, 8, 14, 3, 6, 2, 7];
const nums2 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
const nums3 = [5, 17, 12, 3, 9, 13, 21, 4, 27];
const nums4 = [2, 1];



console.log(partition(nums1));
console.log(partition(nums2));
console.log(partition(nums3));
console.log(partition(nums4));




/*
count how many values are less than the first value/element
count= 0->1->2->3
each time you find a value less than first element, increase count and swap the value towards the beginning
 
//have it so that the first element is in a position in the array where everything to the left of it is less than it, and everything to the right of it is greater than it
 
//return the index number where that first element ended up at
 
*/
//Alex
// function partition(nums = [], left = 0, right = nums.length - 1) {
//     count = 0
//     savenum = nums[left]
//     for (var i = left+1; i <= right; i++){
//         if(savenum > nums[i]){

//             let temp = nums[count]
//             nums[count] = nums[i]
//             nums[i] = temp

//             count ++
//         }
//     }
//     let temp = nums[count]
//     nums[count] = savenum
//     savenum = temp
//     console.log(nums)
//     return count
// }