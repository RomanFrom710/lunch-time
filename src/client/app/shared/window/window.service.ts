import { Injectable } from '@angular/core';


@Injectable()
export abstract class WindowService {
    abstract openTempWindow(newWindowUrl: string, messageName: string): Promise<boolean>;
    abstract getStorageValue(key: string): any;
    abstract setStorageValue(key: string, value: any): void;
}
