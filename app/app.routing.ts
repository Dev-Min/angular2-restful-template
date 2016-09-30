import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './user.list/user.list.component';
import { UserModificationComponent } from './user.modification/user.modification.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/userList',
        pathMatch: 'full'
    },
    {
        path: 'userList',
        component: UserListComponent
    },
    {
        path: 'userModi',
        component: UserModificationComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot( appRoutes );


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
