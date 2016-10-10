/*
* http://usejsdoc.org/
*/
import {Component} from '@angular/core';
import { Router }            from '@angular/router';

@Component({
selector: 'my-app',
template: `
    <h1>My First PrimeNG App</h1>
    <input type="text" pInputText/>
    <input type="text" pInputText/>
    <button pButton type="button" label="Login" (click)="onLogin()"></button>
`,
})
export class LoginComponent {
    constructor(private router: Router) { }
    
    onLogin() {
        let link = ['/userList'];
        this.router.navigate(link);
    }
}