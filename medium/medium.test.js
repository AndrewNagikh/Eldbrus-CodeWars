const students = require('./students/students')
const arr = require('./students/studentsData')
const toCamelCase = require('./camelCase/camelCase')
const spiningWord = require('./spiningWord/spiningWord')


describe("toCamelCase", function() {
    it ("should handle empty values", () => {
      expect(toCamelCase('')).toBe('')
    })
    
    it ("should remove underscores and convert first letter of word to upper case", () => {
      expect(toCamelCase("the_stealth_warrior")).toBe("theStealthWarrior")
      expect(toCamelCase("The_stealth_warrior")).toBe("TheStealthWarrior")

    });
    
    it ("should remove hyphens and convert first letter of word to upper case", () => {
      expect(toCamelCase("The-Stealth-Warrior")).toBe("TheStealthWarrior")
      expect(toCamelCase("the-Stealth-Warrior")).toBe("theStealthWarrior")
      expect(toCamelCase("A-B-C")).toBe("ABC")
      expect(toCamelCase("I-am-a-programmer")).toBe("IAmAProgrammer")
      expect(toCamelCase("i-am-a-programmer")).toBe("iAmAProgrammer")
    });
});

describe("Spinning words",()=>{
  
    function dotest(input, expected) {
      expect(spiningWord(input)).toBe(expected)
    }
    
    it("Fixed tests",()=>{ 
      dotest("Welcome",                              "emocleW"                             );
      dotest("Hey fellow warriors",                  "Hey wollef sroirraw"                 );
      dotest("This is a test",                       "This is a test"                      );
      dotest("This is another test",                 "This is rehtona test"                );
      dotest("This sentence is a sentence",          "This ecnetnes is a ecnetnes"         );
      dotest("You are almost to the last test",      "You are tsomla to the last test"     );
      dotest("Just kidding there is still one more", "Just gniddik ereht is llits one more");
      dotest("Seriously this is the last one",       "ylsuoireS this is the last one"      );
    });
  });


describe('students', () => {
    arr.forEach((el, i) => {
        test(`${i} case`, () => {
            expect(students(el.array)).toStrictEqual(el.answer)
        })
    })
})