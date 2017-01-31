export interface IStudent {
    studentId: number;
    name: string;
    major: string;
    year: string;
    enrollments: IEnrollment[];
}
export interface ICourse {
    courseId: number;
    name: string;
    credits: number;
}
export interface IEnrollment {
    enrollmentId: number;
    studentId: number;
    courseId: number;
    grade: string;
}