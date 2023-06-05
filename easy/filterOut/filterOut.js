// На вход дается массив с числами и строками, отфильтруйте массив так, что бы там были только числа

 function filterOut(arr) {
    return arr.filter((el) => typeof el === 'number')
 }

 module.exports = filterOut;