import { ChangeDetectionStrategy, Component, OnInit }          from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component( {
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})
export class AppComponent implements OnInit {
    title = 'RestFul Tutorial';

    private items: MenuItem[];

    ngOnInit() {
        this.items = [
            { label: 'Login', icon: 'fa-bar-chart', routerLink: ['/login'] },
            { label: 'User List', icon: 'fa-calendar', routerLink: ['/userList'] },
            { label: 'User Create', icon: 'fa-twitter', routerLink: ['/userCreate'] }
        ];
    }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
