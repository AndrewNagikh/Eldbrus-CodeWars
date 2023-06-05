const students = require('./students')
const arr = require('./studentsData')

describe('students', () => {
    arr.forEach((el, i) => {
        test(`${i} case`, () => {
            expect(students(el.array)).toStrictEqual(el.answer)
        })
    })
})