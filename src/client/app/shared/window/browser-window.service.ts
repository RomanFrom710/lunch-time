import { Injectable } from '@angular/core';

import { WindowService } from './window.service';

@Injectable()
export class BrowserWindowService implements WindowService {
    private newWindowOptions: string = 'width=700,height=400,top=200,left=300';

    openTempWindow(newWindowUrl: string, messageName: string): Promise<boolean> {
        return new Promise<boolean>((resolve) => {
            var messageHandler = (event) => {
                if (event.data === messageName) {
                    resolve(true);
                    window.removeEventListener('message', messageHandler);
                }
            };

            window.addEventListener('message', messageHandler);
            window.open(newWindowUrl, 'newwindow', this.newWindowOptions);
        });
    }

    getStorageValue(key: string): any {
        return JSON.parse(localStorage.getItem(key));
    }

    setStorageValue(key: string, value: any): void {
        if (value === null) {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }
}
