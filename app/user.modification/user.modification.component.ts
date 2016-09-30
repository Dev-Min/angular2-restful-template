/*
* http://usejsdoc.org/
*/
import { Component, OnInit }          from '@angular/core';
import { Headers, Http }              from '@angular/http';
import { Observable }                 from 'rxjs/Observable';

import { User } from './user';

@Component({
    selector: 'user-modification',

    template: `
    <h1>{{userTitle}}</h1>
    <div>
        Name : <input #searchBox id="name" /><br>
        Email : <input #searchBox id="email" /><br>
        age : <input #searchBox id="age" /><br>
    </div>
    <div>
        <button>Create</button>
    </div>
    `
})

export class UserModificationComponent {
    userTitle = "User Modification";
}