const singleNumber = require("./singleNum/singleNum");
const searchInsert = require("./searchInsert/searchInsert");
const filterOut = require("./filterOut/filterOut");
const missigNum = require("./missingNum/missigNum");


describe('singleNumber', () => {
    test('[2,2,1]', () => {
        expect(singleNumber([2,2,1])).toEqual(1);
    })
    test('[4,1,2,1,2]', () => {
        expect(singleNumber([4,1,2,1,2])).toEqual(4);
    })
    test('[2,2,1,1,4,5,6,5,6,4,9]', () => {
        expect(singleNumber([2,2,1,1,4,5,6,5,6,4,9])).toEqual(9);
    })
})
describe('searchInsert', () => {
    test('[1,3,5,6]', () => {
        expect(searchInsert([1,3,5,6], 5)).toEqual(2);
    })
    test('[1,3,5,6]', () => {
        expect(searchInsert([1,3,5,6], 2)).toEqual(1);
    })
    test('[1,3,5,6]', () => {
        expect(searchInsert([1,3,5,6], 7)).toEqual(4);
    })
    test('[1,3,5,6,10,14,22,31,42]', () => {
        expect(searchInsert([1,3,5,6,10,14,22,31,42,71,108,121,256,257,258,291,300,314,321,343,356,372,387], 56)).toEqual(9);
    })
    test('[1,3,5,6,8,15]', () => {
        expect(searchInsert([1,3,5,6,8,15], 14)).toEqual(5);
    })
})
describe('missingNum', () => {
    test('[3,0,1]', () => {
        expect(missigNum([3,0,1])).toEqual(2);
    })
    test('[0,1]', () => {
        expect(missigNum([0,1])).toEqual(2);
    })
    test('[9,6,4,2,3,5,7,0,1]', () => {
        expect(missigNum([9,6,4,2,3,5,7,0,1])).toEqual(8);
    })
})
describe('filterOut', () => {
    test('1', () => {
        expect(filterOut([1,'hello',2,3,4,'world'])).toEqual([1,2,3,4]);
    })
    test('2', () => {
        expect(filterOut([1,'a','b',0,15])).toEqual([1,0,15]);
    })
    test('3', () => {
        expect(filterOut([1,2,'aasf','1','123',123])).toEqual([1,2,123]);
    })
    test('4', () => {
        expect(filterOut(['a','b','1'])).toEqual([]);
    })
    test('5', () => {
        expect(filterOut([1,2,'a','b'])).toEqual([1,2]);
    })
})