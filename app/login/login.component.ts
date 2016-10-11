/*
* http://usejsdoc.org/
*/
import {Component} from '@angular/core';
import { Router }            from '@angular/router';

@Component({
selector: 'my-app',
templateUrl: 'app/login/login.component.html'
})
export class LoginComponent {
    constructor(private router: Router) { }
    
    onLogin() {
        let link = ['/userList'];
        this.router.navigate(link);
    }
}