import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';

@Component({
  selector: 'custom-page',
  imports: [ToggleCasePipe],
  templateUrl: './custom-page.html',
})
export default class CustomPage {
  case = signal<'lower' | 'upper'>('lower');

  name = 'Carlos Galindo'

  changeCase() {
    if(this.case() === 'lower') {
      this.case.set('upper');
      return;
    }
    this.case.set('lower')
  }
}
