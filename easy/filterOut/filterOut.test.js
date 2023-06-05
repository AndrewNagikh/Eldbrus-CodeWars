const filterOut = require("./filterOut");

afterAll(() => {
    let PERFORMACE = 0
    for (let i = 0; i < 100; i++) {
        const st = performance.now();
        filterOut([1,2,'aasf','1','123',123])
        const et = performance.now();
        PERFORMACE += (et - st)
    }
    console.log(`PERFORMACE === ${PERFORMACE/99}`)
});

describe('missingNum', () => {
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