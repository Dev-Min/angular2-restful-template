/*
* http://usejsdoc.org/
*/
import {Component} from '@angular/core';
import { Router }            from '@angular/router';
import { Message } from 'primeng/primeng';

@Component({
selector: 'my-app',
templateUrl: 'app/login/login.component.html'
})
export class LoginComponent {
    msgs: Message[] = [];
    userId: string;
    userPw: string;

    constructor(private router: Router) { }
    
    onLogin() {
        if(this.userId == null || this.userId == '') {
            this.showError('E-mail을');
        }
        else if(this.userPw == null || this.userPw == '') {
            this.showError('비밀번호를');
        }
        else {
            let link = ['/userList'];
            this.router.navigate(link);
        }
    }
    
    showError(title: string) {
        this.msgs = [];
        this.msgs.push({severity:'error', summary:title + ' 입력해주세요!'});
    }

    hide() {
        this.msgs = [];
    }
}