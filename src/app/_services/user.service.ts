import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Member } from '../_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Member[]>(`${config.apiUrl}/users`); // GET : link => member/
    }

    getById(guid: string) {
        return this.http.get(`${config.apiUrl}/users/${guid}`); // GET : link => member/${guid}
    }

    register(user: Member, guid) {
        return this.http.post(`${config.apiUrl}/users/register`, user); // POST :  link =>  member/${guid}/
    }

    update(user: Member) {
        return this.http.put(`${config.apiUrl}/users/${user.id}`, user); // POST : link => member/${guid}/...
    }

    delete(guid: string) {
        return this.http.delete(`${config.apiUrl}/users/${id}`); // DELETE : link => member/${guid}
    }
}