import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { LocaleService } from '../../services/locale.service';

@Component({
  selector: 'basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.html',
})
export default class BasicPage {

  localeService = inject(LocaleService);

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

  currentLocale = signal(this.localeService.getLocale())

  changeLocale(language: 'es' | 'fr' | 'en') {
    this.localeService.changeLocale(language);
  }
}
