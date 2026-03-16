import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../../../interfaces/hero.interface';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {

  transform(hero: Hero[], name: string): Hero[] {
    return hero.filter(h => h.name.toLocaleLowerCase().includes(name))
  }

}
