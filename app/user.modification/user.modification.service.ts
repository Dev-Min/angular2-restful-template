/*
* http://usejsdoc.org/
*/
import { Injectable }    from '@angular/core';
import { Headers, Response, Http } from '@angular/http';
import { Observable }                 from 'rxjs/Observable';

import { User } from './user';

@Injectable()
export class UserModificationService {

    private headers = new Headers( { 'Content-Type': 'application/json' });
    private userUrl = 'http://192.168.0.11:8080/mat/v1.0/users';  // URL to web api

    constructor( private http: Http ) { }

    create( name: string ): Promise<User> {
        return this.http
            .post( this.userUrl, JSON.stringify( { name: name }), { headers: this.headers })
            .toPromise()
            .then(( res: Response ) => res.json().data )
            .catch( this.handleError );
    }
}