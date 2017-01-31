import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Components
import { StudentComponent } from './student-list/student.component';
import { StudentAddComponent } from './student-add/student-add.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'student', component: StudentComponent },
            { path: 'student/add', component: StudentAddComponent }
            // { path: '**', redirectTo: 'student'}
        ])
    ],
    exports: [RouterModule],
    declarations: [],
    providers: [],
})
export class StudentRoutingModule { }
