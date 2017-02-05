import { Injectable } from '@angular/core';

import { Point } from './';


@Injectable()
export class Config {
    auth: {
        authEventName: string;
    };

    cafe: {
        itemsPerPage: number;
    };

    map: {
        initialPoint: Point;
        initialZoom: number;
        increasedZoom: number;
    };

    links: {
        auth: {
            info: string;
            logout: string;
            vk: {
                auth: string;
                auth_callback: string;
            },
            local: {
                auth: string;
            }
        },
        user: {
            selfUpdate: string;
        },
        cafe: {
            add: string;
            getAll: string;
            coords: string;
            one: {
                get: string;
                image: string;
            }
        }
    }
}
