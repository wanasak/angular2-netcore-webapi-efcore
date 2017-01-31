import {IEnrollment} from '../interfaces';

export class Student {
    constructor(
        public studentId: number,
        public name: string,
        public major: string,
        public year: string,
        public enrollments: IEnrollment[]
    ) { }
}