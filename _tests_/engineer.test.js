const Engineer = require("../lib/engineer");


describe('Engineer', () => {

    var test = new Engineer("Allen", 1, "allen@gmail.com", 'themanamana');
    it('Should return the engineers name as Allen', () => {

       
      expect(test.name).toBe('Allen');
      
    });
  
    it('Should return the id number as 1', () => {
      expect(test.id).toBe(1);
      
    });
  
    it('Should return the email as allen@gmail.com', () => {
      expect(test.email).toBe('allen@gmail.com');
      
    });
  
    it('Should return github as themanamana', () => {
      expect(test.getGithub()).toBe('themanamana');
      
    });

    it('Should return role as Engineer', () => {
        expect(test.getRole()).toBe("Engineer");
        
      });
  
  });