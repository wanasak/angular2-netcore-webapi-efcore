import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IStudent } from '../../shared/interfaces';
import { Student } from '../../shared/model/student';
import { ConfigService } from '../../shared/config.service';

@Injectable()

export class StudentService {

    private _baseUrl: string = '';

    constructor(
        private http: Http,
        private configService: ConfigService
    ) {
        this._baseUrl = configService.getApiURI();
    }

    getStudents(): Observable<IStudent[]> {
        return this.http.get(this._baseUrl + 'students')
            .map((res: Response) => {
                return res.json();
            })
            .catch(this.handleError);
    }
    getStudent(id: number): Observable<IStudent> {
        return this.http.get(this._baseUrl + 'students/' + id)
            .map((res: Response) => {
                return res.json();
            })
            .catch(this.handleError);
    }
    createStudent(student: Student): Observable<IStudent> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this._baseUrl + 'students/', JSON.stringify(student), {
            headers: headers
        })
            .map((res: Response) => {
                return;
            })
            .catch(this.handleError);
    }
    updateStudent(student: IStudent): Observable<void> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this._baseUrl + 'students/' + student.studentId,
            JSON.stringify(student),
            {
                headers: headers
            })
            .map((res: Response) => {
                return;
            })
            .catch(this.handleError);
    }
    deleteStudent(id: number): Observable<void> {
        return this.http.delete(this._baseUrl + 'students/' + id)
            .map((res: Response) => {
                return;
            })
            .catch(this.handleError);
    }
    private handleError(error: any) {
        var applicationError = error.headers.get('Application-Error');
        var serverError = error.json();
        var modelStateErrors: string = '';

        if (!serverError.type) {
            console.log(serverError);
            for (var key in serverError) {
                if (serverError[key])
                    modelStateErrors += serverError[key] + '\n';
            }
        }

        modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;

        return Observable.throw(applicationError || modelStateErrors || 'Server error');
    }

}