const student = {
    name : "Mohit",
    age : 24,
    gender : "male",
    marks : 80,
    printMarks : function() {
        console.log("marks: ", this.marks); // this refers to that perticular object. 
    },
};

const ram = {
    name : "Ram",
    marks : 90,
    gender : "male",
    age : 25,
}

ram.__proto__ = student; // setting prototype of ram object to student object.

ram.printMarks(); // marks: 90