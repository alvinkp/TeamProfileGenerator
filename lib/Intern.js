// Include dependency to parent class
const Employee = require('./Employee.js');

// Create Intern sub-class
class Intern extends Employee {
    constructor(name, id, school, email) {
        
        // Pass arguments to parent class
        super(name, id, email);

        // Declare new variable exclusive to this sub-class
        this.school = school;
    }
    
    // Declare new Method exclusive to this sub-class
    getSchool(){
        return this.school;
    }

    // Override the getRole() parent class function to return this class's name
    getRole(){
        return 'Intern';
    }
}

//exports class for use elsewhere
module.exports = Intern;