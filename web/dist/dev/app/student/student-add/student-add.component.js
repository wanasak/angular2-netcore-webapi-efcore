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
var forms_1 = require("@angular/forms");
var student_1 = require("../../shared/model/student");
var student_service_1 = require("../service/student.service");
var StudentAddComponent = (function () {
    function StudentAddComponent(formBuilder, studentService) {
        this.formBuilder = formBuilder;
        this.studentService = studentService;
        this.student = new student_1.Student(-1, null, null, null, []);
    }
    StudentAddComponent.prototype.ngOnInit = function () {
        this.initStudentForm();
    };
    StudentAddComponent.prototype.initStudentForm = function () {
        this.studentForm = this.formBuilder.group({
            name: [null, [forms_1.Validators.required]],
            major: [null, [forms_1.Validators.required]],
            year: [null, [forms_1.Validators.required]]
        });
    };
    StudentAddComponent.prototype.submitAddStudent = function () {
        this.addStudent();
    };
    StudentAddComponent.prototype.addStudent = function () {
        this.student.name = this.studentForm.value["name"];
        this.student.major = this.studentForm.value["major"];
        this.student.year = this.studentForm.value["year"];
        console.log(this.student);
        this.studentService.createStudent(this.student)
            .subscribe(function (res) {
            return;
        });
    };
    return StudentAddComponent;
}());
StudentAddComponent = __decorate([
    core_1.Component({
        selector: 'student-add',
        templateUrl: './app/student/student-add/student-add.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        student_service_1.StudentService])
], StudentAddComponent);
exports.StudentAddComponent = StudentAddComponent;

//# sourceMappingURL=student-add.component.js.map
