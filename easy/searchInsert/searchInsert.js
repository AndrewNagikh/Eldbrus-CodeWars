// На вход дается отсортированный массива целый, не отрицательных чисел первым аргументом и искомое число, вторым
// Верните индекс, если искомое число есть в массиве найдена. Если нет, верните индекс туда, где он был бы, если бы он был вставлен по порядку.
// Сосредочтесь на достижении сложности алгоритма O(log n) time coplexity;
//nums = [1,3,5,6], target = 5
// Ответ: 2
// nums = [1,3,5,6], target = 7
// ответ: 4
const searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length;

    while (left < right) {
        const middle = Math.floor((left + right) / 2);

        if (nums[middle] < target) {
            left = middle + 1;
        } else {
            right = middle;
        }
    }

    return left;
};

module.exports = searchInsert;