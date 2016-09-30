import { Component, OnInit }          from '@angular/core';
import { Headers, Http }              from '@angular/http';
import { Observable }                 from 'rxjs/Observable';

import { UserService }                from './user.list.service'
import { Content }                    from './content'

@Component({
  selector: 'user-list',

  template: `
  <h1>{{userTitle}}</h1>
  <li *ngFor="let cont of content">
    {{cont.name}}, {{cont.email}}, {{cont.password}}, {{cont.dept.deptNameType}}
  </li>
  `
})
export class UserListComponent implements OnInit{
  userTitle = 'User List';

  //private headers = new Headers({'Content-Type': 'application/json'});
  private userUrl = 'http://localhost:8080/mat/v1.0/users';  // URL to web api

  public content: Content;

  constructor(private http: Http, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getusers().subscribe(
      data => this.content = data
    );
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
