/*
* http://usejsdoc.org/
*/
import { Component, OnInit }          from '@angular/core';
import { Headers, Http }              from '@angular/http';
import { Location }               from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { Router }            from '@angular/router';
import { SelectItem, Message } from 'primeng/primeng';

import { UserService } from '../user.service/user.service';
import { User } from '../user.model/user';
import { Dept } from '../user.model/dept';

@Component( {
    selector: 'user-modification',
    templateUrl: 'app/user/user.create/user.create.component.html',
    providers: [UserService]
})

export class UserCreateComponent implements OnInit{
    msgs: Message[] = [];
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
        this.user.dept = this.items[0].value;
    }

    onCreateUser(): void {
        if(this.user.email == null) {
            this.showError("E-Mail을");
        }
        else if(this.user.password == null) {
            this.showError("Password를");
        }
        else if(this.user.name == null) {
            this.showError("Name을");
        }
        else if(this.user.age == null) {
            this.showError("Age를");
        }
        else if(this.user.dept.deptNameType == null) {
            this.showError("DEPT를");
        }
        else {
            this.showInfo();
            this.service.create( this.user ).subscribe( user => this.goBack() );
        }
    }

    goBack(): void {
        let link = ['/userList'];
        this.router.navigate(link);
    }
    
    onChangeDropdown(dept: SelectItem) {
        this.user.dept = this.items[dept.value.deptId - 1].value;
    }
    
    showError(title: string) {
        this.msgs = [];
        this.msgs.push({severity:'error', summary:title + ' 입력해주세요!', detail:'Validation failed'});
    }

    hide() {
        this.msgs = [];
    }
    
    showInfo() {
        this.msgs = [];
        this.msgs.push({severity:'submitted', summary:'회원 추가 성공', detail:'PrimeNG rocks'});
    }

}
