import { Injectable } from '@angular/core';

import { WindowService } from './window.service';

@Injectable()
export class MockWindowService implements WindowService {
    openTempWindow(newWindowUrl: string, messageName: string): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => { reject() });
    }
}
