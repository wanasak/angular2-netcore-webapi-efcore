import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { Student } from '../../shared/model/student';
import { StudentService } from '../service/student.service';

@Component({
    selector: 'student-add',
    templateUrl: './app/student/student-add/student-add.component.html'
})
export class StudentAddComponent implements OnInit {

    private studentForm: FormGroup;
    private student: Student = new Student(-1, null, null, null, []);

    constructor(
        private formBuilder: FormBuilder,
        private studentService: StudentService
    ) { }

    ngOnInit() {
        this.initStudentForm();
    }

    initStudentForm() {
        this.studentForm = this.formBuilder.group({
            name: [null, [Validators.required]],
            major: [null, [Validators.required]],
            year: [null, [Validators.required]]
        });
    }
    submitAddStudent() {
        this.addStudent();
    }
    addStudent() {
        this.student.name = this.studentForm.value["name"];
        this.student.major = this.studentForm.value["major"];
        this.student.year = this.studentForm.value["year"];
        console.log(this.student);
        this.studentService.createStudent(this.student)
            .subscribe(res => {
                return;
            });
    }

}