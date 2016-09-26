import { Injectable } from '@angular/core';

import { WindowService } from './window.service';

@Injectable()
export class BrowserWindowService implements WindowService {
    private newWindowOptions: string = 'width=700,height=400,top=200,left=300';

    openTempWindow(newWindowUrl: string, messageName: string): Promise<boolean> {
        return new Promise<boolean>((resolve) => {
            const tempWindow = window.open(newWindowUrl, 'newwindow', this.newWindowOptions);
            tempWindow.addEventListener('message', (event) => {
                if (event.data === messageName) {
                    resolve(true);
                }
            });
        });
    }
}
