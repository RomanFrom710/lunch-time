import { Pipe, PipeTransform } from '@angular/core';

import { Gender } from '../../user';


@Pipe({
    name: 'ltGender'
})
export class GenderPipe implements PipeTransform {
    transform(value: Gender, args: any[]): string {
        switch (value) {
            case Gender.Male:
                return 'Мужской';
            case Gender.Female:
                return 'Женский';
            default:
                return 'Не указан';
        }
    }
}
