import { Injectable, signal } from '@angular/core';

type availableLocales = 'es' | 'fr' | 'en';

@Injectable({
  providedIn: 'root',
})
export class LocaleService {
  private currentLocale = signal<availableLocales>('es');

  constructor() {
    this.currentLocale.set(localStorage.getItem('language') as availableLocales ?? 'es')
  }

  getLocale() {
    return this.currentLocale();
  }

  changeLocale(language: availableLocales) {
    this.currentLocale.set(language);
    localStorage.setItem('language', language)
    window.location.reload()
  }
}
