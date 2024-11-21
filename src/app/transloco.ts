import { inject, Injectable, isDevMode } from '@angular/core';
import { Translation, TranslocoLoader } from '@jsverse/transloco';
import { HttpClient } from '@angular/common/http';
import { TranslocoOptions } from '@jsverse/transloco';

@Injectable({ providedIn: 'root' })
class TranslocoHttpLoader implements TranslocoLoader {
  private http = inject(HttpClient);

  getTranslation(lang: string) {
    return this.http.get<Translation>(`/assets/i18n/${lang}.json`);
  }
}

export const LANG_KEY = 'lang';

export const translocoOptions: TranslocoOptions = {
  config: {
    availableLangs: ['en'],
    defaultLang: localStorage.getItem(LANG_KEY) ?? 'en',
    reRenderOnLangChange: true,
    prodMode: !isDevMode(),
  },
  loader: TranslocoHttpLoader,
};
