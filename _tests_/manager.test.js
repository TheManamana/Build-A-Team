const Manager = require("../lib/manager");

describe('manager', () => {

    var test = new Manager("Allen", 1, "allen@gmail.com", 2);
    it('Should return the managers name as Allen', () => {

       
      expect(test.name).toBe('Allen');
      
    });
  
    it('Should return the id number as 1', () => {
      expect(test.id).toBe(1);
      
    });
  
    it('Should return the email as allen@gmail.com', () => {
      expect(test.email).toBe('allen@gmail.com');
      
    });
  
    it('Should return office number as 2', () => {
      expect(test.getOfficeNumber()).toBe(2);
      
    });

    it('Should return role as Manager', () => {
        expect(test.getRole()).toBe("Manager");
        
      });
  
  });
  