import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentRoutingModule } from './student.routing';

// Components
import { StudentComponent } from './student-list/student.component';
import { StudentAddComponent } from './student-add/student-add.component';

// Services
import { StudentService } from './service/student.service'

// Additional modules
import { ModalModule, ModalDirective } from 'ng2-bootstrap';

@NgModule({
    imports: [
        ReactiveFormsModule,
        StudentRoutingModule,
        CommonModule,
        ModalModule.forRoot()
    ],
    declarations: [
        StudentComponent,
        StudentAddComponent
    ],
    exports: [],
    providers: [
        StudentService
    ]
})
export class StudentModule { }