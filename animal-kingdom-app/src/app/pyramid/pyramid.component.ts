import { Component, Output, OnInit } from '@angular/core';
import { Row } from './pyramid.model'

@Component({
  selector: 'app-pyramid',
  templateUrl: './pyramid.component.html',
  styleUrls: ['./pyramid.component.css']
})
export class PyramidComponent implements OnInit {
  @Output() rows: Row[];

  constructor() { 
    this.rows = []; // initialize

  }

  ngOnInit() {

    // populate levels of the animal kingdom
    this.rows.push(new Row(1, "#F0F8FF"));
    this.rows.push(new Row(2, "#FAEBD7"));
    this.rows.push(new Row(3, "#00CED1"));
    this.rows.push(new Row(4, "#F08080"));
    this.rows.push(new Row(5, "#EE82EE"));
  }

}
