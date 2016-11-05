import { Injectable } from '@angular/core';


@Injectable()
export class Config {
    auth: {
        authEventName: string;
    };

    links: {
        auth: {
            info: string;
            logout: string;
            vk: {
                auth: string;
                auth_callback: string;
            }
        }
    }
}
