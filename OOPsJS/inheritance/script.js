class Person {
    eat() {
        console.log('Eating');
    }   
    sleep() {
        console.log('Sleeping');
    }
}

class Engineer extends Person {
    code() {
        console.log('Coding');
    }
}

let mohit = new Engineer();
mohit.eat(); // Eating
mohit.sleep(); // Sleeping
mohit.code(); // Coding

class Doctor extends Person {
    operate() {
        console.log('Operating');
    }
}

let rahul = new Doctor();
rahul.eat(); // Eating
rahul.sleep(); // Sleeping
rahul.operate(); // Operating


//------1st Example--------------------------------------
// class Parent {
//     hello() {
//         console.log('Hello');
//     }
// }

// class Child extends Parent {
//     goodbye() {
//         console.log('Goodbye');
//     }
// }   

// let child = new Child();
// child.hello(); // Hello
// child.goodbye(); // Goodbye

// let parent = new Parent();
// // parent.goodbye(); // TypeError: parent.goodbye is not a function
// parent.hello(); // Hello