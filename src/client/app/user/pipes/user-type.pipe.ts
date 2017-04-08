import { Pipe, PipeTransform } from '@angular/core';

import { UserType } from '../../user';


@Pipe({
    name: 'ltUserType'
})
export class UserTypePipe implements PipeTransform {
    transform(value: UserType, args: any[]): string {
        switch (value) {
            case UserType.Anon:
                return 'Аноним';
            case UserType.User:
                return 'Пользователь';
            case UserType.SpotOwner:
                return 'Владелец заведения';
            case UserType.Admin:
                return 'Администратор';
            default:
                return 'Не указан';
        }
    }
}
