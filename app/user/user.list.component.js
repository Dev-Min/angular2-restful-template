"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var user_list_service_1 = require('./user.list.service');
var UserListComponent = (function () {
    function UserListComponent(http, userService) {
        this.http = http;
        this.userService = userService;
        this.userTitle = 'User List';
        //private headers = new Headers({'Content-Type': 'application/json'});
        this.userUrl = 'http://localhost:8080/mat/v1.0/users'; // URL to web api
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getusers().subscribe(function (data) { return _this.content = data; });
    };
    UserListComponent = __decorate([
        core_1.Component({
            selector: 'user-list',
            template: "\n  <h1>{{userTitle}}</h1>\n  <li *ngFor=\"let cont of content\">\n    {{cont.name}}, {{cont.email}}, {{cont.password}}, {{cont.dept.deptNameType}}\n  </li>\n  "
        }), 
        __metadata('design:paramtypes', [http_1.Http, user_list_service_1.UserService])
    ], UserListComponent);
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=user.list.component.js.map