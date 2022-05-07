const unsortedArray = [5, 3, 10, 4, 7, 6, 2, 8, 9, 1]


function quickSort(arr, start, end) {
    sorts = 0;
    front_sorted = 0;
    pivot = Math.floor((start + end) / 2);
    pivot = 0;
    placeholder = 0;

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

// console.log(quickSort(unsortedArray, 0, 9));

//Instructor QS
// function partition(nums = [], left = 0, right = nums.length - 1) {
//     let startval = nums[left];
//     let count = left;
//     for (let i = left + 1; i <= right; i++) {
//         // console.log(nums[i]);
//         //if the current element is less than the first element
//         if (nums[i] < startval) {
//             count++;
//             [nums[i], nums[count]] = [nums[count], nums[i]];
//         }
//     }
//     //move the start val into the right place by putting it at index of count
//     [nums[left], nums[count]] = [nums[count], nums[left]];
//     return count;
// }


// function quicksort(nums = [], left = 0, right = nums.length - 1) {
//     //figure out how you would recursively use partition and quicksort
//     //if the start is lesss than the end , then partition the array, and store the index number that we get back in a variable
//     if (left < right) {
//         let index = partition(nums, left, right)
//         console.log("nums array after partitioning", nums)
//         let leftside = quicksort(nums, left, index - 1)
//         let rightside = quicksort(nums, index + 1, right)
//     }

//     return nums



// }
// console.log(quicksort([9, -3, -9, 5, 12, 10, 8]))