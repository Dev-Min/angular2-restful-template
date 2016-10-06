/*
* http://usejsdoc.org/
*/
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable }                 from 'rxjs/Observable';

import { User } from './user';

@Injectable()
export class UserModificationService {
    private headers = new Headers( { 'Content-Type': 'application/json' });
    constructor( private http: Http ) { }

    create( body: User ): Observable<any> {
        console.log(body.email);
        return this.http
            .post(
                'http://localhost:8080/mat/v1.0/users',
                JSON.stringify(
                        body
//                {
//                    "email": body.email,
//                    "name": body.name,
//                    "age": body.age,
//                    "password": body.password,
//                    "activeType": body.activeType,
//                    "dept": {
//                        "deptId": body.dept.deptId,
//                        "deptNameType": body.dept.deptNameType
//                    },
//                    "createDate": body.createdDate
//                }
            ), { headers: this.headers });
    }
}