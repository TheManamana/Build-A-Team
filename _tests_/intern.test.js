const Intern = require("../lib/intern");


describe('Intern', () => {

    var test = new Intern("Allen", 1, "allen@gmail.com", 'UofU');
    it('Should return the interns name as Allen', () => {

       
      expect(test.name).toBe('Allen');
      
    });
  
    it('Should return the id number as 1', () => {
      expect(test.id).toBe(1);
      
    });
  
    it('Should return the email as allen@gmail.com', () => {
      expect(test.email).toBe('allen@gmail.com');
      
    });
  
    it('Should return school as UofU', () => {
      expect(test.getSchool()).toBe('UofU');
      
    });

    it('Should return role as Intern', () => {
        expect(test.getRole()).toBe("Intern");
        
      });
  
  });