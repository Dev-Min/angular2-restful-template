import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, Http, Headers }    from '@angular/http';

import { AppComponent }         from './app.component';
import { routing }              from './app.routing';
import { UserService }          from './user.list/user.list.service';
import { UserListComponent }    from './user.list/user.list.component';
import { UserModificationComponent } from './user.modification/user.modification.component';
import { UserModificationService } from './user.modification/user.modification.service';

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
    ],
    providers: [
        UserService, UserModificationService
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
