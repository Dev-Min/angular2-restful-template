import { Component, OnInit }          from '@angular/core';
import { Headers, Http }              from '@angular/http';
import { Observable }                 from 'rxjs/Observable';
import { Router }            from '@angular/router';
import { Message, ConfirmationService, SelectItem } from 'primeng/primeng';

import { UserService }                from '../user.service/user.service';
import { User }                    from '../user.model/user';
import { ActivePipe }   from './active.pipe';
import { Dept } from '../user.model/dept';

@Component( {
    selector: 'user-list',
    templateUrl: 'app/user/user.list/user.list.component.html',
    styleUrls: ['app/user/user.list/user.list.component.css'],
})
export class UserListComponent implements OnInit {
    userTitle = 'User List';
    filterStr = 'Y';
    dataSource: User[] = [];
    users: User[] = [];
    cols: any[];
    user: User = new User;
    totalRecords: number;
    selectedUser: User;
    displayDialog: boolean;
    newUser: boolean;
    msgs: Message[] = [];
    depts: Dept[] = [];
    items: SelectItem[] = [];

    constructor( private userService: UserService,
        private router: Router,
        private confirmationService: ConfirmationService
    ) { }

    ngOnInit(): void {
        this.depts = this.userService.getDepts();
        this.items.push( { label: this.user.dept.deptNameType, value: this.user.dept });
        for ( let dept of this.depts ) {
            this.items.push( { label: dept.deptNameType, value: { deptId: dept.deptId, deptNameType: dept.deptNameType } });
        }
        
        this.userService.getusers().then( data => {
            this.dataSource = data;
            this.totalRecords = this.dataSource.length;
            for ( let data of this.dataSource ) {
                if ( data.activeType == 'Y' ) {
                    this.users.push( data );
                }
            }
        });
        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'email', header: 'E-Mail' },
            { field: 'age', header: 'Age' },
            { field: 'dept.deptNameType', header: 'Dept' }
            //            { field: 'info', header: 'Info' }
        ];
    }
    
    onChangeDropdown( dept: SelectItem ) {
        this.user.dept = this.items[dept.value.deptId - 1].value;
    }

    onRowSelect( event: any ) {
        this.newUser = false;
        this.user = this.cloneUser( event.data );
        this.displayDialog = true;
        //        let link = ['/detail', event.id];
        //        this.router.navigate( link );
    }

    cloneUser( u: User ): User {
        let user = new User();
        for ( let prop in u ) {
            user[prop] = u[prop];
        }
        return user;
    }

    onSaveUser(): void {
        if ( this.newUser ) {

        }
        else {
            if ( this.user.email == '' ) {
                this.showError( "E-Mail을" );
            }
            else if ( this.user.password == '' ) {
                this.showError( "Password를" );
            }
            else if ( this.user.name == '' ) {
                this.showError( "Name을" );
            }
            else if ( this.user.age == 0 ) {
                this.showError( "Age를" );
            }
            else if ( this.user.dept.deptNameType == null ) {
                this.showError( "DEPT를" );
            }
            else {
                this.userService.update( this.user ).then(() => {
                    this.user = null;
                    this.displayDialog = false;
                });
            }
        }
    }

    onDeleteUser(): void {
        this.confirmationService.confirm( {
            message: 'Are you sure that you want to delete user?',
            accept: () => {
                //Actual logic to perform a confirmation
                this.userService.delete( this.user ).then(() => {
                    this.users.splice( this.findSelectedCarIndex(), 1 );
                    this.user = null;
                    this.displayDialog = false;
                });
            }
        });
    }

    showError( title: string ) {
        this.msgs = [];
        this.msgs.push( { severity: 'error', summary: title + ' 입력해주세요!', detail: 'Validation failed' });
    }

    hide() {
        this.msgs = [];
    }

    findSelectedCarIndex(): number {
        return this.users.indexOf( this.selectedUser );
    }

    showDialogToAdd() {
        this.newUser = true;
        this.user = new User();
        this.displayDialog = true;
    }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
