const Employee = require('../lib/Employee.js');

describe('Employee', () =>  {
    describe('Functionality', () => {
        it("Should store the provided Name, Id and Email Address in the Employee object and return those values as well as it's Role when called with the corresponding methods", () => {
            
            const myName = "Alvin";
            const myId = 512345;
            const myEmail = "alvin@email.com";
            const myRole = "Employee"

            const myEmployee = new Employee(myName, myId, myEmail);

            expect(myEmployee.getName()).toEqual(myName);
            expect(myEmployee.getId()).toEqual(myId);
            expect(myEmployee.getEmail()).toEqual(myEmail);
            expect(myEmployee.getRole()).toEqual(myRole);
        });
    })
})