class Person {
    constructor(name,email,age){
        this.name = name;
        this.email = email;
        this.age = age;
    }
    getPerson(personInfo){
        return "Name: " + personInfo.name + ", email: " + personInfo.email + ", age: " + personInfo.age;
    }
}
exports.Person = Person;