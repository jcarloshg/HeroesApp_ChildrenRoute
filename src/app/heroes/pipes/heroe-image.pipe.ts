import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interfece';

@Pipe({
  name: 'heroeImage',
  // pure: false, // se dispara en cada paso de cilco de vida de los componentes :(
})
export class HeroeImagePipe implements PipeTransform {

  transform(heroe: Heroe): string {
    if (heroe.id === undefined) return "assets/no-image.png";
    if (heroe.alt_img === '' || heroe.alt_img) return heroe.alt_img;
    return `assets/heroes/${heroe.id}.jpg`; // "assets/heroes/{{ heroe.id }}.jpg"
  }

}
