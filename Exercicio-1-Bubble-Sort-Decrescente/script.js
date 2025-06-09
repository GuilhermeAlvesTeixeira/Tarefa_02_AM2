function reversedBubbleSort(arr) {
    let isSwaped;
    let n = arr.length

    do {
        isSwaped = false;
        for (let i = 0; i < n - 1; i++) {
            if(arr[i] < arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                isSwaped = true;
            }
        }
        n--;
    } while (isSwaped);

    return arr;
}

let numArray = [5,3,8,1,2];
console.log(reversedBubbleSort(numArray));