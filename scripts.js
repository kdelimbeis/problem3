
var teacherArray = [];
function teachers (name) {
    teacherArray.push(name);
}

var studentArray = [];
function students (name) {
    studentArray.push(name);
}

function School (name,location) {
    this.name = name;
    this.location = location;
    this.hireTeachers = hireTeachers;
    this.enrollStudents = enrollStudents;
    this.finalGrades = finalGrades;

    function hireTeachers (teacherArray) {
        for (let i = 0; i < teacherArray.length; i++) {
            console.log(teacherArray[i]);
        }
    }

    function enrollStudents (studentArray) {
        for (let i = 0; i < studentArray.length; i++) {
            console.log(studentArray[i]);
        }
    }

    function finalGrades (teacher,student) {
        for (var j = 0; j < teacher.length; j++) {
            for (var k = 0; k < student.length; k++) {
                console.log(teacher[j].name +" assigns final grade to "+ student[k].name);
            }
        }
    }

}

function Person (name,age,height,weight) {
this.name = name;
this.age = age;
this.height = height;
this.weight = weight;
}

function Student () {
this.gradeLevel;
this.courseDifficulty;
this.currentlyEnrolled = true;
Person.apply(this,arguments);
}

function Teacher () {
this.status;
this.tenure;
this.currentlyTeaching = true;
Person.apply(this,arguments);
}

var chris = new Teacher ('chris',30,6,200);
var allen = new Teacher ('allen',34,5.6,180);
var robert = new Teacher ('robert',40,6.5,220);

var jane = new Student ('jane',12,4,80);
var alf = new Student ('alf',10,4,90);
var nik = new Student ('nik',8,3,50);
var brenda = new Student ('brenda',6,2.5,40);
var jim = new Student ('jim',13,5,100);

students(jane);
students(alf);
students(nik);
students(brenda);
students(jim);

teachers(chris);
teachers(allen);
teachers(robert);

var baldi = new School("Baldi","Verree");
baldi.hireTeachers(teacherArray);
baldi.enrollStudents(studentArray);
baldi.finalGrades(teacherArray, studentArray);
