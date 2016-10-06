import { Injectable }    from '@angular/core';
import { Headers, Response, Http } from '@angular/http';
import { Observable }                 from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';

import { Content }                    from './content'

@Injectable()
export class UserService {
    private userUrl = 'http://192.168.0.11:8080/mat/v1.0/users';  // URL to web api

    private content: Content;

    constructor( private http: Http ) { }

    getusers(): Promise<any> {
        return this.http.get( this.userUrl )
            .toPromise()
            .then( response => response.json().content );
    }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
