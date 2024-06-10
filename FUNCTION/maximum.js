let arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 90];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log(max);