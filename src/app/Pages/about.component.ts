import { Component } from '@angular/core';

@Component({
  selector: 'about',
  template :`
    <h3>About component works!</h3>
  `
  /*templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']*/
})
export class AboutComponent {
  title = 'app works!';
}
