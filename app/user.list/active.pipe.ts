/*
* http://usejsdoc.org/
*/
import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../user.model/user';

@Pipe({
    name: 'activePipe'
})

export class ActivePipe implements PipeTransform {
    transform(values: User[]) {
        return values.filter((item) => item.activeType == "Y");
    }
}