import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';

import { IStudent } from '../../shared/interfaces';
import { Student } from '../../shared/model/student';
import { StudentService } from '../service/student.service';

@Component({
    selector: 'student',
    templateUrl: './app/student/student-list/student.component.html',
    styles: [`
        table .btn-link {
            padding: 0px;
        }
    `]
})
export class StudentComponent implements OnInit {

    @ViewChild('childConfirmModal') public childConfirmModal: ModalDirective;
    students: IStudent[];
    selectedStudent: Student = new Student(null, null, null, null, []);

    constructor(
        private studentService: StudentService
    ) { }

    ngOnInit() {
        this.getStudents();
    }

    getStudents() {
        this.studentService.getStudents()
            .subscribe((students: IStudent[]) => {
                this.students = students;
            });
    }
    onClickDetailStudent(student: Student) {
        console.log(JSON.stringify(student));
    }
    onClickDeleteStudent(student: Student) {
        this.selectedStudent = student;
        this.childConfirmModal.show();
    }
    onClickConfirmDeleteStudent() {
        this.studentService.deleteStudent(this.selectedStudent.studentId)
            .subscribe(res => {
                let deleteIndex = this.students.findIndex(st => st.studentId == this.selectedStudent.studentId);
                this.students.splice(deleteIndex, 1);
                this.cleanSelectedStudent();
                this.childConfirmModal.hide();
                return;
            });
    }
    hideChildModal() {
        this.childConfirmModal.hide();
    }
    private cleanSelectedStudent() {
        this.selectedStudent = new Student(null, null, null, null, []);
    }

}