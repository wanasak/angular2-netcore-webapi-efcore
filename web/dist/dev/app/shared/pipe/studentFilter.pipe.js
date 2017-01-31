"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var StudentFilterPipe = (function () {
    function StudentFilterPipe() {
    }
    StudentFilterPipe.prototype.transform = function (students, args) {
        // if (!students || !args) students;
        var filter = args[0].toLocaleLowerCase();
        return filter ? students.filter(function (st) { return st.name.toLocaleLowerCase().indexOf(filter) != -1; }) : students;
    };
    return StudentFilterPipe;
}());
StudentFilterPipe = __decorate([
    core_1.Pipe({
        name: 'studentFilter'
    })
], StudentFilterPipe);
exports.StudentFilterPipe = StudentFilterPipe;

//# sourceMappingURL=studentFilter.pipe.js.map
