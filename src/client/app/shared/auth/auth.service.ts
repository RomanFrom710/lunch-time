import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {
    constructor(private http: Http) {}

    authVk(): void {
        this.http.get('/auth/vk')
            .toPromise()
            .then(console.log);
    }
}
