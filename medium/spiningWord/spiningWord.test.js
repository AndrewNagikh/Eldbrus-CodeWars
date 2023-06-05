const spiningWord = require('./spiningWord')

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