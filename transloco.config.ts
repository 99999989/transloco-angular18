import { TranslocoGlobalConfig } from '@jsverse/transloco-utils';

const config: TranslocoGlobalConfig = {
  langs: ['en'],
  keysManager: { emitErrorOnExtraKeys: true },
  rootTranslationsPath: 'src/assets/i18n/',
};

export default config;
