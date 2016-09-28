import { ChangeDetectionStrategy, Component }          from '@angular/core';

@Component({
  selector: 'my-app',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  title = 'RestFul Tutorial';
  
  public tabs:Array<any> = [
   {title: 'Login', content: 'Dynamic content 1'},
   {title: 'User List', content: 'Dynamic content 2'},
 ];

 public setActiveTab(index:number):void {
   this.tabs[index].active = true;
 };
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
