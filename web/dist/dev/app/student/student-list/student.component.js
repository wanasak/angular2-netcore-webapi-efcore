"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var student_1 = require("../../shared/model/student");
var student_service_1 = require("../service/student.service");
var StudentComponent = (function () {
    function StudentComponent(studentService) {
        this.studentService = studentService;
        this.selectedStudent = new student_1.Student(null, null, null, null, []);
    }
    StudentComponent.prototype.ngOnInit = function () {
        this.getStudents();
    };
    StudentComponent.prototype.getStudents = function () {
        var _this = this;
        this.studentService.getStudents()
            .subscribe(function (students) {
            _this.students = students;
        });
    };
    StudentComponent.prototype.onClickDetailStudent = function (student) {
        console.log(JSON.stringify(student));
    };
    StudentComponent.prototype.onClickDeleteStudent = function (student) {
        this.selectedStudent = student;
        this.childConfirmModal.show();
    };
    StudentComponent.prototype.onClickConfirmDeleteStudent = function () {
        var _this = this;
        this.studentService.deleteStudent(this.selectedStudent.studentId)
            .subscribe(function (res) {
            var deleteIndex = _this.students.findIndex(function (st) { return st.studentId == _this.selectedStudent.studentId; });
            _this.students.splice(deleteIndex, 1);
            _this.cleanSelectedStudent();
            _this.childConfirmModal.hide();
            return;
        });
    };
    StudentComponent.prototype.hideChildModal = function () {
        this.childConfirmModal.hide();
    };
    StudentComponent.prototype.cleanSelectedStudent = function () {
        this.selectedStudent = new student_1.Student(null, null, null, null, []);
    };
    return StudentComponent;
}());
__decorate([
    core_1.ViewChild('childConfirmModal'),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], StudentComponent.prototype, "childConfirmModal", void 0);
StudentComponent = __decorate([
    core_1.Component({
        selector: 'student',
        templateUrl: './app/student/student-list/student.component.html',
        styles: ["\n        table .btn-link {\n            padding: 0px;\n        }\n    "]
    }),
    __metadata("design:paramtypes", [student_service_1.StudentService])
], StudentComponent);
exports.StudentComponent = StudentComponent;

//# sourceMappingURL=student.component.js.map
