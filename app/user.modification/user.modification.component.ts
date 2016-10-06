/*
* http://usejsdoc.org/
*/
import { Component, OnInit }          from '@angular/core';
import { Headers, Http }              from '@angular/http';
import { Location }               from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

import { UserModificationService } from './user.modification.service';
import { User } from './user';
import { Dept } from './dept';

@Component( {
    selector: 'user-modification',
    template: `
    <h1>{{userTitle}}</h1>
    <div>
        E-Mail : <input [(ngModel)]="user.email" placeholder="E-Mail"><br>
        Password : <input [(ngModel)]="user.password" placeholder="Password"><br>
        Name : <input [(ngModel)]="user.name" placeholder="name"><br>
        Age : <input [(ngModel)]="user.age" placeholder="Age"><br>
        DEPT :
        <select>
          <option value="1">ARCH</option>
          <option value="2">CODER</option>
          <option value="3">QA</option>
        </select>
    </div>
    <div>
        user.email : {{user.email}}<br>
        user.password : {{user.password}}<br>
        user.name : {{user.name}}<br>
        user.age : {{user.age}}<br>
        user.activeType : {{user.activeType}}<br>
        user.dept.deptId : {{user.dept.deptId}}<br>
        user.dept.deptNameType : {{user.dept.deptNameType}}<br>
        user.createdDate : {{user.createdDate}}<br>
    </div>
    <div>
        <button (click)="onCreateUser()">Create User</button>
    </div>
    `,
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
