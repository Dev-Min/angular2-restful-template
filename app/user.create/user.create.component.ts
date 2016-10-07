/*
* http://usejsdoc.org/
*/
import { Component, OnInit }          from '@angular/core';
import { Headers, Http }              from '@angular/http';
import { Location }               from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { Router }            from '@angular/router';

import { UserService } from '../user.service/user.service';
import { User } from '../user.model/user';
import { Dept } from '../user.model/dept';

@Component( {
    selector: 'user-modification',
    templateUrl: 'app/user.create/user.create.component.html',
    providers: [UserService]
})

export class UserCreateComponent {
    depts = [{'id': '1', 'value': 'ARCH'}, {'id': '2', 'value': 'CODER'}, {'id': '3', 'value': 'QA'}];
    selectDept = this.depts[1];
    userTitle = "User Create";
    user: User = new User;

    constructor(
        private service: UserService,
        private location: Location,
        private router: Router
    ) { }

    onCreateUser(): void {
        this.service.create( this.user ).subscribe();
        this.goBack();
    }

    goBack(): void {
        let link = ['/userList'];
        this.router.navigate(link);
    }
    
    onChangeDropdown(dept: any) {
        this.user.dept.deptId = dept.id;
        this.user.dept.deptNameType = dept.value;
    }
}
