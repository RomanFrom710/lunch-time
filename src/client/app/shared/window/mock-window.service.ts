import { Injectable } from '@angular/core';

import { WindowService } from './window.service';

@Injectable()
export class MockWindowService implements WindowService {
    private mockStorage: Object = {};

    openTempWindow(newWindowUrl: string, messageName: string): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => { reject() });
    }

    getStorageValue(key: string): any {
        return this.mockStorage[key] || null;
    }

    setStorageValue(key: string, value: any): void {
        this.mockStorage[key] = value;
    }
}
