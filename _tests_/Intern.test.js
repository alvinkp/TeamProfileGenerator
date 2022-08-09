const Intern = require('../lib/Intern.js');

describe('Intern sub-class', () =>  {
    describe('Functionality', () => {
        it("Should store the provided Name, Id, Office Number and Email Address in the Intern object and return those values when called with the corresponding methods", () => {
            
            const myName = "Mike";
            const myId = 2335;
            const mySchool = "UPENN";
            const myEmail = "mike@email.com";
            const myRole = "Intern";

            const myIntern = new Intern(myName, myId, mySchool, myEmail);

            expect(myIntern.getName()).toEqual(myName);
            expect(myIntern.getId()).toEqual(myId);
            expect(myIntern.getSchool()).toEqual(mySchool);
            expect(myIntern.getEmail()).toEqual(myEmail);
            expect(myIntern.getRole()).toEqual(myRole);
        });
    })
})