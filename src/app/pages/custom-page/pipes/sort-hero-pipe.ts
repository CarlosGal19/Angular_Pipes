import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../../../interfaces/hero.interface';

@Pipe({
  name: 'sortHero',
})
export class SortHeroPipe implements PipeTransform {

  transform(value: Hero[], orderBy: 'name' | 'canFly' | 'color' | 'creator' = 'name'): Hero[] {
    return value.sort((a, b) => {
      return a[orderBy].toString().localeCompare(b[orderBy].toString());
    });
  }

}
