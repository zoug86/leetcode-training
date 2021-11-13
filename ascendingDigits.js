const ascending = function (arr) {
    let nums = [];
    let result = []
    for (let i = 0; i < arr.length; i++) {
        while (arr[i] >= 1) {
            nums.push(Math.floor(arr[i] % 10));
            arr[i] = arr[i] / 10;
        }
        let num = nums.sort((a, b) => { a - b }).join('');
        result.push(parseInt(num));
        nums = [];
    }
    return result;
};

console.log(ascending([98765432, 765432]))