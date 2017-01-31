import { Pipe, PipeTransform } from '@angular/core';

import {IStudent} from '../interfaces';

@Pipe({
    name: 'studentFilter'
})
export class StudentFilterPipe implements PipeTransform {
    transform(students: IStudent[], args: string[]): any {
        // if (!students || !args) students;
        let filter = args[0].toLocaleLowerCase();
        return filter ? students.filter(st => st.name.toLocaleLowerCase().indexOf(filter) != -1) : students;
    }
}