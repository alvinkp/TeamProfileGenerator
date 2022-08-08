// Parent class of Manager, Engineer and Intern classes
class Employee {
    
    // Constructor takes in name, id and email
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // getName, getID, getEmail & getRole Methods
    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return 'Employee';
    }
}

//exports class for use elsewhere
module.exports = Employee;