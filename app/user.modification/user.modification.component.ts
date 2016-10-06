/*
* http://usejsdoc.org/
*/
import { Component, OnInit }          from '@angular/core';
import { Headers, Http }              from '@angular/http';
import { Location }               from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

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
    userTitle = "User Modification";
    user: User = new User;

    constructor(
        private service: UserService,
        private location: Location,
        private route: ActivatedRoute
    ) { }
    
    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
          let id = +params['id'];
          this.service.getUser(id)
            .then(user => this.user = user);
        });
      }
    
    onUpdateUser(): void {
        this.service.update(this.user).then(() => this.goBack());
    }
    
    onDeleteUser(): void {
        this.service.delete(this.user.id);
    }
    
    goBack(): void {
        this.location.back();
      }
}
