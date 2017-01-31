"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var student_routing_1 = require("./student.routing");
// Components
var student_component_1 = require("./student-list/student.component");
var student_add_component_1 = require("./student-add/student-add.component");
// Services
var student_service_1 = require("./service/student.service");
// Additional modules
var ng2_bootstrap_1 = require("ng2-bootstrap");
var StudentModule = (function () {
    function StudentModule() {
    }
    return StudentModule;
}());
StudentModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.ReactiveFormsModule,
            student_routing_1.StudentRoutingModule,
            common_1.CommonModule,
            ng2_bootstrap_1.ModalModule.forRoot()
        ],
        declarations: [
            student_component_1.StudentComponent,
            student_add_component_1.StudentAddComponent
        ],
        exports: [],
        providers: [
            student_service_1.StudentService
        ]
    })
], StudentModule);
exports.StudentModule = StudentModule;

//# sourceMappingURL=student.module.js.map
