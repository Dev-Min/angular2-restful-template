import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, Http, Headers }    from '@angular/http';
import { 
    InputTextModule, ButtonModule, DataTableModule,
    PanelModule, MenuModule, PasswordModule,
    DropdownModule, GrowlModule, EditorModule,
    SharedModule, ConfirmDialogModule, DialogModule,
    FileUploadModule, ConfirmationService } from 'primeng/primeng';

import { AppComponent }         from './app.component';
import { routing }              from './app.routing';
import { UserListComponent }    from './user/user.list/user.list.component';
import { UserService } from './user/user.service/user.service';
import { ActivePipe }   from './user/user.list/active.pipe';
import { LoginComponent } from './login/login.component';
import { NgEditorComponent } from './editor/editor.component';
import { FileUploadComponent } from './file/file.upload.component';

@NgModule( {
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        InputTextModule,
        ButtonModule,
        DataTableModule,
        PanelModule,
        MenuModule,
        PasswordModule,
        DropdownModule,
        GrowlModule,
        EditorModule,
        SharedModule,
        ConfirmDialogModule,
        DialogModule,
        FileUploadModule
    ],
    declarations: [
        AppComponent,
        UserListComponent,
        ActivePipe,
        LoginComponent,
        NgEditorComponent,
        FileUploadComponent
    ],
    providers: [
        UserService, ConfirmationService
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
