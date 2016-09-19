import { Component } from '@angular/core';
import { AuthService } from '../../shared';

@Component({
    selector: 'lt-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.less'],
    providers: [ AuthService ]
})
export class SignInComponent {
    constructor(private authSerivce: AuthService) {}

    authVk(): void { // todo: this is just for test, move it somewhere
        window.open('/auth/vk', 'newwindow', 'width=500, height=300');
    }
}
