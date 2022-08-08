const Employee = require('./Employee.js');

// Create Engineer sub-class
class Engineer extends Employee {
    constructor(name, id, github, email) {
        
        // Pass arguments to parent class
        super(name, id, email);

        // Declare new variable exclusive to this sub-class
        this.github = github;
    }
    
    // Declare new Method exclusive to this sub-class
    getGithub(){
        return this.github;
    }

    // Override the getRole() parent class function to return this class's name
    getRole(){
        return 'Engineer';
    }
}

// Testing purposes Remove before submitting
const myEngineer = new Engineer("Al", 2, "engi", "al@fakeemail.com");

console.log(`${myEngineer.getName()} ${myEngineer.getId()} https://github.com/${myEngineer.getGithub()} ${myEngineer.getEmail()} ${myEngineer.getRole()}`);