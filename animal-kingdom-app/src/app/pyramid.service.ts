import { Injectable } from '@angular/core';

import { PyramidRow } from './pyramid-row/pyramid-row.model';
import { Animal, ANIMAL_TYPES, LEVEL_COLORS } from './pyramid/pyramid.model';

@Injectable()
export class PyramidService {
  pyramidRows: PyramidRow[] = [];

  constructor() {
    var level: number;
    
    // populate pyramidRows for all levels of animal kingdom
    for (level = 1; level < 6; level++){
      var animals: Animal[] =[];

      // populating all of the animal types for current level
      ANIMAL_TYPES[level].forEach(type => {
        animals.push(new Animal(level, type));
      });

      // populate pyramidRow for this level
      this.pyramidRows.push(new PyramidRow(animals, LEVEL_COLORS[level]));
    }
  }

  getPyramid() : PyramidRow[] {
    return this.pyramidRows;
  }
}
