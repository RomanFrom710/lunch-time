import { Injectable } from '@angular/core';

@Injectable()
export class Config {
    authEventName: string;
    links: {
        vk: {
            auth: string;
            auth_callback: string;
        }
    }
}
