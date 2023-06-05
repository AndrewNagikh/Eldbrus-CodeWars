
const toCamelCase = require('./camelCase')

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