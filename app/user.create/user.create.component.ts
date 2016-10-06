/*
* http://usejsdoc.org/
*/
import { Component, OnInit }          from '@angular/core';
import { Headers, Http }              from '@angular/http';
import { Location }               from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

import { UserModificationService } from './user.create.service';
import { User } from '../user.model/user';
import { Dept } from '../user.model/dept';

@Component( {
    selector: 'user-modification',
    templateUrl: 'app/user.create/user.create.component.html',
    providers: [UserModificationService]
})

export class UserModificationComponent {
    userTitle = "User Modification";
    user: User = new User;

    constructor(
        private service: UserModificationService,
        private location: Location
    ) { }

    onCreateUser(): void {
        this.service.create( this.user ).subscribe();
        this.goBack();
    }

    goBack(): void {
        this.location.back();
    }
}
