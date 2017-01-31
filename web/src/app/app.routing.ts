import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
// import {StudentComponent} from './student/student-list/student.component';
// import {StudentAddComponent} from './student/student-add/student-add.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    // { path: 'student', component: StudentComponent },
    // { path: 'student/add', component: StudentAddComponent },
    { path: 'about', component: AboutComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
