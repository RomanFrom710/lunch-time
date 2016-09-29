import { Injectable } from '@angular/core';


@Injectable()
export class Config {
    auth: {
        authEventName: string;
        links: {
            vk: {
                auth: string;
                auth_callback: string;
            }
        }
    }
}
