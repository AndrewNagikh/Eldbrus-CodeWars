const missigNum = require("./missigNum");

afterAll(() => {
    let PERFORMACE = 0
    for (let i = 0; i < 100; i++) {
        const st = performance.now();
        missigNum([9,6,4,2,3,5,7,0,1])
        const et = performance.now();
        PERFORMACE += (et - st)
    }
    console.log(`PERFORMACE === ${PERFORMACE/99}`)
});

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