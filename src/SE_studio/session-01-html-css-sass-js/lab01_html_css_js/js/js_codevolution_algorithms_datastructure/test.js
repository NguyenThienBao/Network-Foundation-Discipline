function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while(left <= right) {
        let middle = Math.floor(right + left) / 2;
        console.log("Hello", middle)
    
        if(arr[middle] === target) {
            return middle;
        }

        if(target < arr[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
}

console.log(binarySearch([1, 2, 3, 4, 6, 10], 3))