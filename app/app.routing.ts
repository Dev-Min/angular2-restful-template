import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './user/user.list/user.list.component';
import { LoginComponent } from './login/login.component';
import { NgEditorComponent } from './editor/editor.component';
import { FileUploadComponent } from './file/file.upload.component';

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
        path: 'editor',
        component: NgEditorComponent
    },
    {
        path: 'upload',
        component: FileUploadComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot( appRoutes );


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
