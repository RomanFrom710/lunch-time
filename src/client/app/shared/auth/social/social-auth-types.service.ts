import { Injectable } from '@angular/core';

import { SocialAuth } from './';
import { AuthService } from '../';


@Injectable()
export class SocialAuthTypesService {
    private socialAuthTypes: SocialAuth[] = [
        new SocialAuth('VK', require('/vk_logo.png'), () => this.authService.authVk())
    ];

    constructor(private authService: AuthService) { }

    get types() : SocialAuth[] {
        return this.socialAuthTypes;
    }
}
