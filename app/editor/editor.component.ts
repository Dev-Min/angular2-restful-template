/*
* http://usejsdoc.org/
*/
import { Component }          from '@angular/core';

@Component ({
    selector: 'editor',
    templateUrl: 'app/editor/editor.component.html'
})

export class NgEditorComponent {
    bodyText: string = '';
}