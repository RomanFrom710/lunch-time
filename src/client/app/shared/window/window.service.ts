import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


// Declaring abstract class because this service
// depends on platform.
@Injectable()
export abstract class WindowService {
    abstract openTempWindow(newWindowUrl: string, messageName: string): Observable<boolean>;
    abstract getStorageValue(key: string): any;
    abstract setStorageValue(key: string, value: any): void;
}
