import { Component, Output, OnInit } from '@angular/core';
import { Pyramid } from './pyramid.model'
import { PyramidService } from '../pyramid.service'

@Component({
  selector: 'app-pyramid',
  templateUrl: './pyramid.component.html',
  styleUrls: ['./pyramid.component.css']
})
export class PyramidComponent implements OnInit {
  pyramid: Pyramid;
  constructor(private pyramidService: PyramidService) { 
    this.pyramid = new Pyramid();
  }
  
  getPyramid(): void {
    this.pyramid.pyramidRows = this.pyramidService.getPyramid();
  }
  
  ngOnInit(): void {
    this.getPyramid();
  }
}

//[ngStyle]="{'background-color': + pyramidRow.color}"