import { Component, OnInit, Input } from '@angular/core';
import { PyramidRow } from './pyramid-row.model';
import { Animal } from '../pyramid/pyramid.model';
@Component({
  selector: 'app-pyramid-row',
  templateUrl: './pyramid-row.component.html',
  styleUrls: ['./pyramid-row.component.css']
})

export class PyramidRowComponent implements OnInit {
  @Input() animals: Animal[]; // take level input so can create row for animals of that level

  constructor() {}

  ngOnInit() {
  }
}


