class UserProfile{
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    getName(){
        console.log(`My name is ${firstname} ${Lastname}`)
    }
}

let obj = new UserProfile('John', 'Smith');
obj.getName();