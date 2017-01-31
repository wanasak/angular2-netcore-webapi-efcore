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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var config_service_1 = require("../../shared/config.service");
var StudentService = (function () {
    function StudentService(http, configService) {
        this.http = http;
        this.configService = configService;
        this._baseUrl = '';
        this._baseUrl = configService.getApiURI();
    }
    StudentService.prototype.getStudents = function () {
        return this.http.get(this._baseUrl + 'students')
            .map(function (res) {
            return res.json();
        })
            .catch(this.handleError);
    };
    StudentService.prototype.getStudent = function (id) {
        return this.http.get(this._baseUrl + 'students/' + id)
            .map(function (res) {
            return res.json();
        })
            .catch(this.handleError);
    };
    StudentService.prototype.createStudent = function (student) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this._baseUrl + 'students/', JSON.stringify(student), {
            headers: headers
        })
            .map(function (res) {
            return;
        })
            .catch(this.handleError);
    };
    StudentService.prototype.updateStudent = function (student) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this._baseUrl + 'students/' + student.studentId, JSON.stringify(student), {
            headers: headers
        })
            .map(function (res) {
            return;
        })
            .catch(this.handleError);
    };
    StudentService.prototype.deleteStudent = function (id) {
        return this.http.delete(this._baseUrl + 'students/' + id)
            .map(function (res) {
            return;
        })
            .catch(this.handleError);
    };
    StudentService.prototype.handleError = function (error) {
        var applicationError = error.headers.get('Application-Error');
        var serverError = error.json();
        var modelStateErrors = '';
        if (!serverError.type) {
            console.log(serverError);
            for (var key in serverError) {
                if (serverError[key])
                    modelStateErrors += serverError[key] + '\n';
            }
        }
        modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;
        return Observable_1.Observable.throw(applicationError || modelStateErrors || 'Server error');
    };
    return StudentService;
}());
StudentService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        config_service_1.ConfigService])
], StudentService);
exports.StudentService = StudentService;

//# sourceMappingURL=student.service.js.map
