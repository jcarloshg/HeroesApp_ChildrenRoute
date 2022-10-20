import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interfece';

@Pipe({
  name: 'heroeImage'
})
export class HeroeImagePipe implements PipeTransform {

  transform(heroe: Heroe): string {
    // "assets/heroes/{{ heroe.id }}.jpg"
    return `assets/heroes/${heroe.id}.jpg`;
  }

}
