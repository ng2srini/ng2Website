import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {
  private jumbHeader : string;
  private jumbTitle : string;
  private jumbText : string;
  private jumbBtn : string;
  constructor() { 
    this.jumbHeader = "Jumbotron";
    this.jumbTitle = "Angular2";
    this.jumbBtn = 'Read More';
    this.jumbText = "The second version of the AngularJS web framework. Angular 2 takes a web component-based approach to building powerful applications for the web. It is used along with TypeScript which provides support for ECMAScript 5, ECMAScript 6, and ECMAScript 7."
  }

  ngOnInit() {
  }

}
