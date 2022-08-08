const Employee = require('./Employee.js');

// Create Manager sub-class
class Manager extends Employee {
    constructor(name, id, officeNumber, email) {
        
        // Pass arguments to parent class
        super(name, id, email);

        // Declare new variable exclusive to this sub-class
        this.officeNumber = officeNumber;
    }

    // Override the getRole() parent class function to return this class's name
    getRole(){
        return 'Manager';
    }
}

// Testing purposes Remove before submitting
const myManager = new Manager("Al", 2, 903, "al@fakeemail.com");

console.log(`${myManager.getName()} ${myManager.getId()} ${myManager.officeNumber} ${myManager.getEmail()} ${myManager.getRole()}`);