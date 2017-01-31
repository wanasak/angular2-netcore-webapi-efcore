"use strict";
var Student = (function () {
    function Student(studentId, name, major, year, enrollments) {
        this.studentId = studentId;
        this.name = name;
        this.major = major;
        this.year = year;
        this.enrollments = enrollments;
    }
    return Student;
}());
exports.Student = Student;

//# sourceMappingURL=student.js.map
