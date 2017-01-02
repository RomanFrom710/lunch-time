import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { WindowService } from './window.service';


@Injectable()
export class BrowserWindowService implements WindowService {
    private newWindowOptions: string = 'width=700,height=400,top=200,left=300';

    openTempWindow(newWindowUrl: string, messageName: string): Observable<boolean> {
        const subject = new Subject<boolean>();
        const messageHandler = event => {
            if (event.data === messageName) {
                subject.next(true);
                window.removeEventListener('message', messageHandler);
            }
        };

        window.addEventListener('message', messageHandler);
        window.open(newWindowUrl, 'newwindow', this.newWindowOptions);

        return subject.asObservable();
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
