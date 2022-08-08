const Employee = require('../lib/Employee.js');

describe('Employee', () =>  {
    describe('Class Instance', () => {
        it("Should store the provided Name, Id and Email Address in the Employee object and return those values when called with the corresponding methods", () => {
            
            const myName = "Alvin";
            const myId = 512345;
            const myEmail = "alvin@email.com";

            const myEmployee = new Employee("Alvin", 512345, "alvin@email.com");
            expect(myEmployee.getName()).toEqual(myName);
            expect(myEmployee.getId()).toEqual(myId);
            expect(myEmployee.getEmail()).toEqual(myEmail);
        });
    })
})