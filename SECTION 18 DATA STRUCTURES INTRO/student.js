class Student{

    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullname(){
        return `your full name is ${this.firstName} ${this.lastName}`;
    }
    static enrollstudents(students){

    }
}

let fn = new Student("colt", "steele");
console.log(fn.fullname());
console.log(Student.enrollstudents); //static method can be called only by the class