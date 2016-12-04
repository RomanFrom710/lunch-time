import { Injectable } from '@angular/core';

import { SocialAuth } from './';
import { AuthService } from '../../';


@Injectable()
export class SocialAuthTypesService {
    private socialAuthTypes: SocialAuth[] = [
        new SocialAuth('vkontakte', require('assets/vk_logo.png'), () => this.authService.authVk())
    ];

    constructor(private authService: AuthService) { }

    get types() : SocialAuth[] {
        return this.socialAuthTypes;
    }

    findType(name: string): SocialAuth {
        const result = this.socialAuthTypes.find(authType => authType.name === name);
        return result || null;
    }
}
