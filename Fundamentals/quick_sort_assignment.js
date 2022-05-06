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

console.log(quickSort(unsortedArray, 0, 9));
