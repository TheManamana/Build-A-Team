const Employee = require("../lib/employee");


describe('Employee', () => {

    var test = new Employee("Allen", 1, "allen@gmail.com");
    it('Should return the employees name as Allen', () => {

       
      expect(test.name).toBe('Allen');
      
    });
  
    it('Should return the id number as 1', () => {
      expect(test.id).toBe(1);
      
    });
  
    it('Should return the email as allen@gmail.com', () => {
      expect(test.email).toBe('allen@gmail.com');
      
    });
  


    it('Should return role as Employee', () => {
        expect(test.getRole()).toBe("Employee");
        
      });
  
  });