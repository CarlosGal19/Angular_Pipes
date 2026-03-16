import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../mock/hero.data';
import { CanFlyPipe } from './pipes/can-fly-pipe';
import { ColorPipe } from './pipes/color-pipe';
import { TextColorPipe } from './pipes/text-color-pipe';
import { CreatorPipe } from './pipes/creator-pipe';

@Component({
  selector: 'custom-page',
  imports: [ToggleCasePipe, CanFlyPipe, ColorPipe, TextColorPipe, CreatorPipe],
  templateUrl: './custom-page.html',
})
export default class CustomPage {
  case = signal<'lower' | 'upper'>('lower');

  name = 'Carlos Galindo';

  heroes = signal([...heroes]);

  changeCase() {
    if(this.case() === 'lower') {
      this.case.set('upper');
      return;
    }
    this.case.set('lower')
  }
}
