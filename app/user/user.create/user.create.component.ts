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
    templateUrl: 'app/user/user.create/user.create.component.html',
    providers: [UserService]
})

export class UserCreateComponent implements OnInit{
    depts: Dept[] = [];
    selectDept: Dept = new Dept;
    userTitle = "User Create";
    user: User = new User;

    constructor(
        private service: UserService,
        private location: Location,
        private router: Router
    ) { }
    
    ngOnInit(): void {
        this.depts = this.service.getDepts();
        this.selectDept = this.depts[0];
        this.user.dept = this.selectDept;
    }

    onCreateUser(): void {
        this.service.create( this.user ).subscribe( user => this.goBack() );
    }

    goBack(): void {
        let link = ['/userList'];
        this.router.navigate(link);
    }
    
    onChangeDropdown(dept: Dept) {
        this.user.dept.deptId = dept.deptId;
        this.user.dept.deptNameType = dept.deptNameType;
    }
}
