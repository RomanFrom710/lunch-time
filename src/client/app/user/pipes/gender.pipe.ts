import { Pipe, PipeTransform } from '@angular/core';

import { Gender } from '../../user';


@Pipe({
    name: 'ltGender'
})
export class GenderPipe implements PipeTransform {
    transform(value: Gender, args: any[]): string {
        if (!value) {
            return 'Не указан';
        }

        if (value === Gender.Male || Gender[value.toString()] === Gender.Male) {
            return 'Мужской';
        } else {
            return 'Женский';
        }
    }
}
