import { Component, OnInit }          from '@angular/core';
import { Headers, Http }              from '@angular/http';
import { Observable }                 from 'rxjs/Observable';
import { Router }            from '@angular/router';

import { UserService }                from '../user.service/user.service';
import { User }                    from '../user.model/user';
import { ActivePipe }   from './active.pipe';

@Component({
  selector: 'user-list',
  templateUrl: 'app/user.list/user.list.component.html',
  styleUrls: [ 'app/user.list/user.list.component.css' ],
})
export class UserListComponent implements OnInit{
  userTitle = 'User List';
  public users: User[] = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getusers().then(
      data => this.users = data
    );
  }
  
  gotoDetail(user: User): void {
      let link = ['/detail', user.id];
      this.router.navigate(link);
    }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
