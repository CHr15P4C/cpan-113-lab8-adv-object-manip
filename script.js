//create student object
const student = {

    name : "Chris",
    age : 28,
    enrolled : true,
    courses : ["cpan111", "cpan113", "cpan116"],
    studentInfo() {
        return this.name + this.age + this.enrolled + this.courses;
    },

    //method to add a new course with spread to array
    spreadCourse(newCourse) {
        this.courses = [...this.courses, newCourse];
        return;
    },

    numberCourses() {
        return this.courses.length;

    }
};

console.log(student.studentInfo());

//create and log json string of student
const studentJSON = JSON.stringify(student);
console.log(studentJSON);
//turn it back into an obj and log
const studentOBJ = JSON.parse(studentJSON);
console.log(studentOBJ);

//destructur student, yield name and course properties

const {name, courses} = student;
console.log("name: " + name + "courses" + courses);


//create scores

const scores =  [85, 92, 78, 90];
//destructure first two:
const [a, b] = scores;
console.log(a);
console.log(b);

//spead operator ...
//clone student object

const clonedStudent = { ...student};
console.log(clonedStudent);

//adding an item during the spread:

const clonedPlusStudent = { ...student, additional: 'value'};
console.log(clonedPlusStudent);

//merging two arrays

const newcourses = ['cpan123', 'cpan345', 'cpan666'];

const mergedCourses = [...student.courses, ...newcourses];
console.log(mergedCourses);

//test adding a new course
student.spreadCourse('cpan999');
console.log(student.courses);

//length
console.log(student.numberCourses());

//3rd commit

//4th commit

//5

//6

//7