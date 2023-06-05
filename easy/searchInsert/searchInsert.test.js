const searchInsert = require("./searchInsert");

afterAll(() => {
    let PERFORMACE = 0
    for (let i = 0; i < 100; i++) {
        const st = performance.now();
        searchInsert([1,3,5,6,10,14,22,31,42,71,108,121,256,257,258,291,300,314,321,343,356,372,387], 56)
        const et = performance.now();
        PERFORMACE += (et - st)
        console.log(PERFORMACE)
    }
    console.log(`PERFORMACE === ${PERFORMACE/99}`)
});

describe('missingNum', () => {
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