import { Component, Inject } from '@angular/core';

import { AuthService } from '../../shared';

@Component({
    selector: 'lt-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.less'],
    providers: [ AuthService ]
})
export class SignInComponent {
    constructor(private authSerivce: AuthService,
                @Inject('config') private config) {}

    authVk(): void { // todo: this is just for test, move it somewhere
        window.open(this.config.links.vk.auth, 'newwindow', 'width=500, height=300');
    }
}
