import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { WindowService } from './window.service';


@Injectable()
export class MockWindowService implements WindowService {
    private mockStorage: Object = {};

    openTempWindow(newWindowUrl: string, messageName: string): Observable<boolean> {
        return Observable.throw(false);
    }

    getStorageValue(key: string): any {
        return this.mockStorage[key] || null;
    }

    setStorageValue(key: string, value: any): void {
        this.mockStorage[key] = value;
    }
}
