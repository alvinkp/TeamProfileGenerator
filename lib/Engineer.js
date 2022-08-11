// Include dependency to parent class
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

//exports class for use elsewhere
module.exports = Engineer;