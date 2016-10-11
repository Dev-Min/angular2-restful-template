/*
* http://usejsdoc.org/
*/
import { Component, OnInit }          from '@angular/core';
import { Headers, Http }              from '@angular/http';
import { Location }               from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SelectItem } from 'primeng/primeng';

import { UserService } from '../user.service/user.service';
import { User } from '../user.model/user';
import { Dept } from '../user.model/dept';

@Component( {
    moduleId: module.id,
    selector: 'user-modification',
    templateUrl: 'user.modification.component.html',
    providers: [UserService]
})

export class UserModificationComponent implements OnInit {
    depts: Dept[] = [];
    items: SelectItem[] = [];
    selectItem: SelectItem;
    userTitle = "User Modification";
    user: User = new User;

    constructor(
        private service: UserService,
        private location: Location,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.depts = this.service.getDepts();
        this.route.params.forEach(( params: Params ) => {
            let id = +params['id'];
            this.service.getUser( id )
                .then( user => {
                    this.user = user;
                    this.depts = this.service.getDepts();
                    for ( let dept of this.depts ) {
                        this.items.push( { label: dept.deptNameType, value: { deptId: dept.deptId, deptNameType: dept.deptNameType } });
                    }
                    this.selectItem = this.items[user.dept.deptId - 1];
                    this.user.dept = this.depts[user.dept.deptId - 1];
                });
        });
    }

    onUpdateUser(): void {
        this.service.update( this.user ).then(() => this.goBack() );
    }

    onDeleteUser(): void {
        this.service.delete( this.user ).then(() => this.goBack() );
    }

    goBack(): void {
        let link = ['/userList'];
        this.router.navigate( link );
    }

    onChangeDropdown(selectItem: any) {
        this.user.dept.deptId = selectItem.value.deptId;
        this.user.dept.deptNameType = selectItem.value.deptNameType;
    }
}
