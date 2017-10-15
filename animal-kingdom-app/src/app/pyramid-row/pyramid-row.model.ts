
/* static variables:
 *      animal_types {level : [types]}
 *      animal_names [names]
 *      animal_urls [urls]
 */

import { Animal } from '../pyramid/pyramid.model'

export class PyramidRow{
    animals: Animal[];
    color: string;

    constructor(a: Animal[], c: string){
        this.animals = a;
        this.color = c;
    }
}

