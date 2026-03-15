import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.html',
})
export default class BasicPage {
  nameLower = signal('carlos');
  nameUpper = signal('CARLOS');
  fullName = signal('cArlOS gALINdo');

  customDate = signal(new Date());

  updateDateEffect = effect((onCleanup) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date())
    }, 1000)

    onCleanup(() => {
      clearInterval(interval);
    })
  })
}
