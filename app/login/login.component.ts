/*
* http://usejsdoc.org/
*/
import {Component} from '@angular/core';

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
    onLogin() {
        
    }
}