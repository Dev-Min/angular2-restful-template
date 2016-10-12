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
    detailTitle: string;
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

    constructor(
        private userService: UserService,
        private router: Router,
        private confirmationService: ConfirmationService
    ) {}

    ngOnInit(): void {
        this.depts = this.userService.getDepts();
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
        this.detailTitle = 'User Detail';
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
            if ( this.user.email == null ) {
                this.showError( "E-Mail을" );
            }
            else if ( this.user.password == null ) {
                this.showError( "Password를" );
            }
            else if ( this.user.name == null ) {
                this.showError( "Name을" );
            }
            else if ( this.user.age == null ) {
                this.showError( "Age를" );
            }
            else if ( this.user.dept.deptNameType == null ) {
                this.showError( "DEPT를" );
            }
            else {
                this.userService.create( this.user ).subscribe( user => {
                    this.users.push( this.user );
                    this.user = null;
                    this.displayDialog = false;
                });
            }
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
                    this.users[this.findSelectedCarIndex()] = this.user;
                    this.user = null;
                    this.displayDialog = false;
                });
            }
        }
    }

    onDeleteUser(): void {
        this.confirmationService.confirm( {
            header: '선택한 회원정보를 삭제합니다.',
            message: '회원정보 삭제를 원하시면 Yes를 선택해 주세요.',
            accept: () => {
                this.displayDialog = false;
                this.userService.delete( this.user ).then(() => {
                    this.users.splice( this.findSelectedCarIndex(), 1 );
                    this.user = null;
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
        this.detailTitle = 'User Create';
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
