import { TestBed } from '@angular/core/testing';

import { SocialSignInComponent } from './';
import { AuthService, MockAuthService, User, WindowService, MockWindowService } from '../../shared';


describe('social-sign-in component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ SocialSignInComponent ],
            providers: [
                { provide: AuthService, useClass: MockAuthService },
                { provide: WindowService, useClass: MockWindowService }
            ]
        });
    });

    it ('should call authService methods', () => {
        const fixture = TestBed.createComponent(SocialSignInComponent);
        const authService = fixture.debugElement.injector.get(AuthService);

        spyOn(authService, 'authVk').and.returnValue(Promise.resolve(new User()));

        fixture.componentInstance.authVk();
        expect(authService.authVk).toHaveBeenCalled();
    });
});
