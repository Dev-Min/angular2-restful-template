import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, Http, Headers }    from '@angular/http';

import { AppComponent }         from './app.component';
import { routing }              from './app.routing';
import { UserListComponent }    from './user.list/user.list.component';
import { UserCreateComponent } from './user.create/user.create.component';
import { UserModificationComponent } from './user.modification/user.modification.component';
import { UserService } from './user.service/user.service';

@NgModule( {
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        UserListComponent,
        UserModificationComponent,
        UserCreateComponent
    ],
    providers: [
        UserService
    ],
    
    bootstrap: [AppComponent]
})
export class AppModule {
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
