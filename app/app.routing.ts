import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './user/user.list/user.list.component';
import { UserCreateComponent } from './user/user.create/user.create.component';
import { UserModificationComponent } from './user/user.modification/user.modification.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'userList',
        component: UserListComponent
    },
    {
        path: 'userModi',
        component: UserCreateComponent
    },
    {
        path: 'detail/:id',
        component: UserModificationComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot( appRoutes );


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
