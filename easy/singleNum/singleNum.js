// На вход дается массив целый, не отрицальных чисел, в котром все числа встречаются два раза, кроме одного. 
// Найдите число, которое встречается только один раз в массиве


const singleNumber = function(nums) {
    let hash = {};
    for (const num of nums) {
        hash[num] = hash[num] + 1 || 1;
    }
    for (const keys in hash) {
        if (hash[keys] === 1) {
            return Number(keys)
        }
    }
};

module.exports = singleNumber;