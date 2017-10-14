import { Component, OnInit, Input } from '@angular/core';
import { Animal, animal_types } from './pyramid-row.model'
@Component({
  selector: 'app-pyramid-row',
  templateUrl: './pyramid-row.component.html',
  styleUrls: ['./pyramid-row.component.css']
})
export class PyramidRowComponent implements OnInit {
  animals: Animal[]; // instantiate object to hold all animals from this level
  @Input() level: number; // take level input so can create row for animals of that level

  constructor() { 
    this.animals = []; // initialize
  }

  ngOnInit() {
    console.log(this.level);
    
    // add all animals in this level to this row component
    animal_types[this.level].forEach(type => {
      this.animals.push(new Animal(this.level, type));
    });
  }
}


