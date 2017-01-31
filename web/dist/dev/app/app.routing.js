"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
// import {StudentComponent} from './student/student-list/student.component';
// import {StudentAddComponent} from './student/student-add/student-add.component';
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    // { path: 'student', component: StudentComponent },
    // { path: 'student/add', component: StudentAddComponent },
    { path: 'about', component: about_component_1.AboutComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);

//# sourceMappingURL=app.routing.js.map
