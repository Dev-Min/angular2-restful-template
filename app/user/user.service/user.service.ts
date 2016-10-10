/*
* http://usejsdoc.org/
*/
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable }                 from 'rxjs/Observable';

import { User } from '../user.model/user';
import { Dept } from '../user.model/dept';
import { Depts } from '../user.model/dept.dropdown';

@Injectable()
export class UserService {
    private userUrl = 'http://192.168.0.11:8080/mat/v1.0/users';  // URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor( private http: Http ) { }

    getusers(): Promise<User[]> {
        return this.http.get( this.userUrl )
            .toPromise()
            .then( response => response.json().content as User[]);
    }
    
    getUser(id: number): Promise<User> {
        return this.getusers()
        .then(users => users.find(user => user.id == id));
    }
    
    create( body: User ): Observable<any> {
        return this.http.post(this.userUrl, JSON.stringify(body), { headers: this.headers });
    }
    
    update(user: User): Promise<User> {
        const url = `${this.userUrl}/${user.id}`;
        return this.http
          .put(url, JSON.stringify(user), {headers: this.headers})
          .toPromise()
          .then(() => user)
          .catch(this.handleError);
      }
    
    delete(user: User): Promise<void> {
        const url = `${this.userUrl}/${user.id}`;
        return this.http.delete(url, {headers: this.headers})
          .toPromise()
          .then(() => null)
          .catch(this.handleError);
      }
    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
      }
    
    getDepts(): Dept[] {
            return Depts;
    }
}
