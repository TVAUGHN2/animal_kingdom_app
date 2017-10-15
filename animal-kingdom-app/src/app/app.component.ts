import { Component, Output } from '@angular/core';
import { PyramidComponent } from './pyramid/pyramid.component'
import { PyramidService } from './pyramid.service'
import { Pyramid } from './pyramid/pyramid.model'
/* 
 * This app calls the pyramid component.
 * The pyramid component creates the levels of the animal kingdom. 
 * Then for each level the pyramid component calls the pyramid row component. 
 * The pyramid row component then creates an animal object for each animal in that level
 * The animal object contains a random name, the type of the animal, 
 *    the level of the animal, and an image url for that animal
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
}
