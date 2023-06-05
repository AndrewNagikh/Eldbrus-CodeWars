const singleNumber = require("./singleNum");

afterAll(() => {
    let PERFORMACE = 0
    for (let i = 0; i < 100; i++) {
        const st = performance.now();
        singleNumber([2,2,1,1,4,5,6,5,6,4,9])
        const et = performance.now();
        PERFORMACE += (et - st)
    }
    console.log(`PERFORMACE === ${PERFORMACE/99}`)
});

describe('missingNum', () => {
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