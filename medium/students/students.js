// Вам дан массив из объектов в котром содержаться данные студента ({ firstName: 'Abhisumant', group: 'lynxes' }), но они расположены в случайном порядке
// Напишите функцию, которая объеденит студентов в группы
// Такая функция должна вернуть объект, где ключами будут названия групп, 
// а значения этих ключей это массив строк с именами студентов, относящихся к этой группе

const arr = require("./studentsData");

// Что у вас должно получиться : 
// {
//     jays: [Массив с именами студентов],
//     racoons: [Массив с именами студентов],
//     lynxes: [Массив с именами студентов]
// }
// входные данные вы найдете в файле studentsData.js
// array - массив, который принмает функция, answer - то что она должна вернуть

function students(arr) {
    return arr.reduce((acc, curr) => {
        if(acc[curr.group]) {
            acc[curr.group].push(curr.firstName);
            return acc;
        } else {
            acc[curr.group] = [];
            return acc
        }
    }, {})
}

console.log(students(arr))

module.exports = students;