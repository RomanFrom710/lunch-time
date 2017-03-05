import { Injectable } from '@angular/core';

import { SocialAuth } from './';
import { AuthService } from '../../';
import { Config } from '../../../shared'


@Injectable()
export class SocialAuthTypesService {
    private socialAuthTypes: SocialAuth[] = [];

    constructor(authService: AuthService, config: Config) {
        if (config.auth.vk) {
            this.socialAuthTypes.push(
                new SocialAuth('vkontakte', require('assets/vk_logo.png'), () => authService.authVk())
            );
        }
    }

    get types() : SocialAuth[] {
        return this.socialAuthTypes;
    }

    findType(name: string): SocialAuth {
        const result = this.socialAuthTypes.find(authType => authType.name === name);
        return result || null;
    }
}
