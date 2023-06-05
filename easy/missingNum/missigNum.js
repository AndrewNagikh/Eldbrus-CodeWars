// Вам дан массив целых чисел nums в диапазоне от [0,n], где n - длина массива, найдите единственное число в диапазоне, отсутствующее в массиве.
// Example 1:

// nums = [3,0,1]
// Ответ: 2

// nums = [0,1]
// Ответ: 2

// nums = [9,6,4,2,3,5,7,0,1]
// Ответ: 8
function missigNum (nums) {
    return (nums.length*(nums.length+1))/2 - nums.reduce((acc, curr) => acc + curr ,0)
}

module.exports = missigNum;