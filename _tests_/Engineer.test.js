const Engineer = require('../lib/Engineer.js');

describe('Engineer sub-class', () =>  {
    describe('Functionality', () => {
        it("Should store the provided Name, Id, Github Username and Email Address in the Engineer object and return those values as well as it's Role when called with the corresponding methods", () => {
            
            const myName = "Bryan";
            const myId = 605;
            const myGithub = "BryanCoder";
            const myEmail = "Bryan@email.com";
            const myRole = "Engineer"

            const myEngineer = new Engineer(myName, myId, myGithub, myEmail);

            expect(myEngineer.getName()).toEqual(myName);
            expect(myEngineer.getId()).toEqual(myId);
            expect(myEngineer.getGithub()).toEqual(myGithub);
            expect(myEngineer.getEmail()).toEqual(myEmail);
            expect(myEngineer.getRole()).toEqual(myRole);
        });
    })
})