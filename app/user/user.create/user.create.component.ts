/*
* http://usejsdoc.org/
*/
import { Component, OnInit }          from '@angular/core';
import { Headers, Http }              from '@angular/http';
import { Location }               from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { Router }            from '@angular/router';
import { SelectItem } from 'primeng/primeng';

import { UserService } from '../user.service/user.service';
import { User } from '../user.model/user';
import { Dept } from '../user.model/dept';

@Component( {
    selector: 'user-modification',
    templateUrl: 'app/user/user.create/user.create.component.html',
    providers: [UserService]
})

export class UserCreateComponent implements OnInit{
    items: SelectItem[] = [];
//    selectItem: SelectItem;
    depts: Dept[] = [];
    userTitle = "User Create";
    user: User = new User;

    constructor(
        private service: UserService,
        private location: Location,
        private router: Router
    ) {
    }
    
    ngOnInit(): void {
        this.depts = this.service.getDepts();
        for(let dept of this.depts) {
            this.items.push({label: dept.deptNameType, value: {deptId: dept.deptId, deptNameType: dept.deptNameType}});
        }
//        this.selectItem = this.items[0];
//        this.user.dept = this.selectItem.value;
    }

    onCreateUser(): void {
        this.service.create( this.user ).subscribe( user => this.goBack() );
    }

    goBack(): void {
        let link = ['/userList'];
        this.router.navigate(link);
    }
    
    onChangeDropdown(dept: SelectItem) {
//        this.user.dept.deptId = dept.value.deptId;
//        this.user.dept.deptNameType = dept.value.deptNameType;
        this.user.dept = this.items[dept.value.deptId - 1].value;
    }
}
