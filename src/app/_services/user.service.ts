import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Member } from '../_models';

const config = 'https://formagreen-80e62.firebaseio.com/'

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Member[]>(`${config}/users`); // GET : link => member/
    }

    getById(guid: string) {
        return this.http.get(`${config}/users/${guid}`); // GET : link => member/${guid}
    }

    register(user: Member, guid) {
        return this.http.post(`${config}/users/register`, user); // POST :  link =>  member/${guid}/
    }

    update(guid: Member) {
        return this.http.put(`${config}/users/${guid}`, guid); // POST : link => member/${guid}/...
    }

    delete(guid: string) {
        return this.http.delete(`${config}/users/${guid}`); // DELETE : link => member/${guid}
    }
}