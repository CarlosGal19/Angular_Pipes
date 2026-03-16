import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../mock/hero.data';
import { CanFlyPipe } from './pipes/can-fly-pipe';
import { ColorPipe } from './pipes/color-pipe';
import { TextColorPipe } from './pipes/text-color-pipe';
import { CreatorPipe } from './pipes/creator-pipe';
import { SortHeroPipe } from './pipes/sort-hero-pipe';

@Component({
  selector: 'custom-page',
  imports: [ToggleCasePipe, CanFlyPipe, ColorPipe, TextColorPipe, CreatorPipe, SortHeroPipe],
  templateUrl: './custom-page.html',
})
export default class CustomPage {
  case = signal<'lower' | 'upper'>('lower');

  name = 'Carlos Galindo';

  heroes = signal([...heroes]);

  selectedSorted = signal<'name' | 'canFly' | 'color' | 'creator'>('name');

  changeCase() {
    if(this.case() === 'lower') {
      this.case.set('upper');
      return;
    }
    this.case.set('lower')
  }
}
